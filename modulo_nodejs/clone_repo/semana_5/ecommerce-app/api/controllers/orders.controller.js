// Models
const { Product } = require('../models/product.model');
const { Cart } = require('../models/cart.model');
const { ProductInCart } = require('../models/productInCart.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { filterObj } = require('../utils/filterObj');
const { AppError } = require('../utils/appError');

exports.getUserCart = catchAsync(async (req, res, next) => {
	const { currentUser } = req;

	// bucamos el cart del usuario que le corresponga
	const cart = await Cart.findOne({
		where: { userId: currentUser.id, status: 'onGoing' },
		include: [
			{
				model: ProductInCart,
				where: { status: 'active' },
				include: [{ model: Product }],
			},
		],
	});

	res.status(200).json({ status: 'success', data: { cart } });
});

exports.addProductToCart = catchAsync(async (req, res, next) => {
	const { product } = req.body;
	const { currentUser } = req;

	const filteredObj = filterObj(product, 'id', 'quantity');

	// buscamos el producto con el id que nos dio el fron y que el producto este activo
	// Validate if quantity is less or equal to existing quantity
	const productExists = await Product.findOne({
		where: { id: filteredObj.id, status: 'active' },
	});

	// coprobamos si el producto esta esta activo y que la cantidad no supere el limite que dice dicho producto
	if (!productExists || filteredObj.quantity > productExists.quantity) {
		return next(
			new AppError(
				'Product does not exists or it exceeds the available quantity',
				400
			)
		);
	}

	// buscamos el cart que le corresponga al usuario
	// Check if current user already has a cart
	const cart = await Cart.findOne({
		where: { userId: currentUser.id, status: 'onGoing' },
	});

	// comprobamos si el usuario no tiene carrito
	// Create new cart
	if (!cart) {
		const totalPrice = +filteredObj.quantity * +productExists.price;

		const newCart = await Cart.create({ userId: currentUser.id, totalPrice });

		await ProductInCart.create({
			cartId: newCart.id,
			productId: filteredObj.id,
			quantity: filteredObj.quantity,
			price: productExists.price,
		});
	}

	// actualizamos si el usuario tiene un carrito
	// Update cart
	if (cart) {
		// buscamos si el producto existe en el ProductInCart. Lo buscamos por el IdCart y el IdPorducto 
		// Check if product already exists on the cart
		const productInCartExists = await ProductInCart.findOne({
			where: {
				cartId: cart.id,
				productId: filteredObj.id,
				status: 'active',
			},
		});

		// comprobamos si existe el producto en el cart(ProductInCart)
		if (productInCartExists) {
			return next(
				new AppError('You already added this product to the cart', 400)
			);
		}

		// metemos el nuevo producto en el ProductInCart
		// Add it to the cart
		await ProductInCart.create({
			cartId: cart.id,
			productId: filteredObj.id,
			quantity: filteredObj.quantity,
			price: productExists.price,
		});

		// calculamos el nuevo precio total del cart
		// Calculate the cart total price
		const updatedTotalPrice =
			+cart.totalPrice + +filteredObj.quantity * +productExists.price;

		await cart.update({ totalPrice: updatedTotalPrice });
	}

	res.status(201).json({ status: 'success' });
});

exports.updateProductCart = catchAsync(async (req, res, next) => {
	const { currentUser } = req;
	const { productId, newQuantity } = req.body;

	// buscamo el cart al usuario que le corresponga
	// Find user's cart
	const userCart = await Cart.findOne({
		where: { userId: currentUser.id, status: 'onGoing' },
	});

	// comprabamos si el usuario no tiene un carrito 
	// y si no tiene carrito le mandamos un error 
	if (!userCart) {
		return next(new AppError('Invalid cart', 400));
	}

	// si el usuario si tiene un carrito buscamos los producto en ProductoInCart con el status active
	// Find product in cart
	const productInCart = await ProductInCart.findOne({
		where: {
			productId,
			cartId: userCart.id,
			status: 'active',
		},
		include: [{ model: Product }],
	});

	// si el usuario no tiene un productoInCart le mandamos un error
	if (!productInCart) {
		return next(new AppError('Invalid product', 400));
	}

	// comprobamos si la cantidad inviada del producto no sea mayor al limite primitido
	// si se supera el limite le mandamos un error
	if (newQuantity > +productInCart.product.quantity) {
		return next(
			new AppError(
				`This product only has ${productInCart.product.quantity} items`,
				400
			)
		);
	}

	let updatedTotalPrice;

	// Check if user added or removed from the selected product
	// If user send 0 quantity to product, remove it from the cart
	// si el la cantidad del producto es igual a 0 lo sacamos del cart y le ponemos el status remove 
	// en el prodcutInCart
	if (newQuantity === 0) {
		updatedTotalPrice =
			+userCart.totalPrice - +productInCart.quantity * +productInCart.price;

		// Update quantity to product in cart
		await productInCart.update({ quantity: 0, status: 'removed' });
	} else if (newQuantity > +productInCart.quantity) {
		// New items were added
		updatedTotalPrice =
			+userCart.totalPrice +
			(newQuantity - +productInCart.quantity) * +productInCart.price;

		// Update quantity to product in cart
		await productInCart.update({ quantity: newQuantity });
	} else if (newQuantity < +productInCart.quantity) {
		// Items were removed from the cart
		updatedTotalPrice =
			+userCart.totalPrice -
			(+productInCart.quantity - newQuantity) * +productInCart.price;

		// Update quantity to product in cart
		await productInCart.update({ quantity: newQuantity });
	}

	// Calculate new total price
	await userCart.update({ totalPrice: updatedTotalPrice });

	res.status(204).json({ status: 'success' });
});
