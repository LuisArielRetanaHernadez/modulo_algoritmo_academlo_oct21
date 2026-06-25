class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(maxSize) {
      this.top = null;
      this.minValue = {value: 0, next: null};
      this.maxValue = {value: 0, next: null};
      this.maxSize = maxSize;
      this.size = 0;
    }
  
    push(value) {

      const newNode = new Node(value);

      if (!this.top) {

        this.top = newNode;

        this.maxValue = {...newNode}
        this.minValue = {...newNode}
      } else if(!this.isFull()){

        let newValue = {...newNode}

        if (this.top.value > this.maxValue.value) {

            
            this.maxValue = newValue
        }

        if (this.top.value < this.minValue.value) {

            newValue.next = this.minValue
            this.minValue = newValue
        }

        newNode.next = this.top; //Apuntamos al elemento que está en la cima
        this.top = newNode;
      } else {

        return new Error('La pila está llena');
      }

      this.size++;
      return this;
    }
  
    peek() {
      return this.top;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    isFull() {
      return this.size === this.maxSize;
    }
  
    pop() {
      if (this.size > 0) {
        let topNode = this.top;
        this.top = topNode.next;
        this.size--;
        return topNode;
      }
    }
  }
  
  
  class SetOfStacks {
    constructor(maxCapacity) {
        this.stacks = [];
        this.maxCapacity = maxCapacity;
    }
    
    getLastStack(){

        //Si no hay pilas (stacks) -> regresar null
        if (this.stacks.length <= 0) return null

        //Regresar la última pila almacenada en el arreglo stacks
        return this.stacks[this.stacks.length - 1]
    }
    
    push(value){

        //Casos:
        let stack = this.getLastStack()

        //1. Arreglo stacks está vacio
        if (stack === null) {

            let newStack = new Stack(this.maxCapacity)

            newStack.push(value)

            this.stacks.push(newStack)

            return this.stacks
        }

        //2. El Arreglo stacks contiene una pila
        //3. La última pila (stack) de platos está llena
        if (stack.size === this.maxCapacity) {

            let newStack = new Stack(maxCapacity)

            newStack.push(value)

            this.stacks.push(newStack)

            return newStack
        }

        stack.push(value)
        //Puedes apoyarte del método getLastStack para poder hacer las validaciones y agregar los platos
    }
    
    pop(){

        let stack = this.getLastStack()

        //Casos:
        //1. Cuando no nos queden pilas (stack) en el arreglo           
        if (stack === null ) throw 'not stacks'

        //2. La pila (stack) tenga más de un elemento
        if (stack.size > 1) {
            stack.pop()
            return stack
        }

        //3. La pila (stack) solo le queda un elemento
        if (stack.size === 1) {
            stack.pop()
            this.stacks.pop()
        }
        //Puedes apoyarte del método getLastStack para poder hacer las validaciones y eliminar los platos
    }
}
  
const alacena = new SetOfStacks(5);
alacena.push(2)
alacena.push(1)
alacena.push(10)
alacena.push(-1)
alacena.pop()

console.log(alacena.stacks);