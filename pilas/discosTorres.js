class Node {
  constructor(value) {
    this.id = `Tile-${value}`;
    this.value = value;
    this.width = 2 * value;
    this.next = null;
  }
}
  
  class Stack {
    constructor(size) {
      //¿Cuáles son las propiedades/atributos?
      this.top = null;
      this.maxSize = size;
      this.size = 0;
    }
  
    //add insert push -> agregar un elemento
    push(value) {
      let newNode = new Node(value)

      if (!this.top && this.isEmpty) {
        this.top = newNode;
        this.size++;
        return this
      }
  
      if (this.size >= this.maxSize) return this
      
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
      return this;
    }
  
    //pop delete remove -> borrar un elemento
    pop() {
      //1. Cuando no nos queden elementos en nuestra estructura de datos
      if (this.size === 0) {
        return null;
      }
      //2. Cuando tengamos elementos en nuestra estructura de datos
      const topNode = this.top;
      this.top = this.top.next;
      this.size--;
      return topNode;
    }

    updateMaxSize(maxSize) {
      if (!isNaN(maxSize) && maxSize >= 0) {
        this.maxSize = maxSize
        return this
      }
    }

    delet(maxSize) {
      if ( maxSize >= 0 ) this.updateMaxSize(maxSize)
      this.top.next = null
      this.top = null
      this.size = 0
      return this
    }

    peek() {
      return this.top;
    }
  
    isFull() {
      return this.size === this.maxSize;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    traverse() {
      //Obtener una lista con todos los nodos de la pila
      let currentNode = this.top;
      let list = [];
      while (currentNode) {
        let tempNode = Object.assign({}, currentNode);
        tempNode.next = null;
        list.push(tempNode);
        currentNode = currentNode.next;
      }
      return list;
    }
  }
  
  class Tower extends Stack{
    constructor(maxSize) {
      super(maxSize);
      this.maxSize = maxSize
    }
  
    add(disk) {
      //Un valor nuevo en una torre debe ser menor al valor existente en la cabeza
      if (this.push || disk < this.top.value) {
        return this.push(disk);
      }
    }
  
    moveTopTo(destinationTower) {
      //mover el disco que se encuentra en top
      //hacia la torre destino
      if (this.top !== null) {
        let disk = this.top.value;
        this.pop(); //Quitamos el disco que se encuentra en top
        destinationTower.add(disk);
      }
    }
  }
  
  const tower1 = new Tower(4);
  const tower2 = new Tower(6);
  const tower3 = new Tower();
  
  tower1.add(3);
  const eliminar = tower1.pop()

  tower1.delet(0)

  console.log(tower1)
  console.log(tower2)
