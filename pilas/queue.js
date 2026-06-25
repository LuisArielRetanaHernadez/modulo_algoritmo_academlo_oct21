class Node {
    //¿Dos propiedades de un nodo de una lista enlazada (simple) ?
    constructor (value) {

      this.prev = null;
      this.value = value;
    }
  }
  
  class Queue {

    constructor () {

      //¿Tres propiedades de las colas (queue)?
      this.rear = null;
      this.front = null;
      this.size = 0;
    }
  
    enqueue(value){
      //Agregar un nuevo elemento a la cola
      const newNode = new Node(value);

      if (this.size === 0) {

        this.rear = newNode;
        this.front = newNode;
      } else {

        this.rear.prev = newNode;
        this.rear = newNode;
      }

      this.size++;

      return this;
    }
  
    dequeue(){
      //Quitar un elemento de la cola
      if (!this.isEmpty()) {

        this.front = this.front.prev
        this.size--;
      } else {
        throw 'cola vacia'
      }
    }

    isEmpty() {
        return this.size === 0
    }

    peek() {
        return this.front
    }
}
  
const myQueue = new Queue();
myQueue.enqueue(7);
myQueue.enqueue(8);
myQueue.enqueue(9);
// myQueue.dequeue()
console.log(JSON.stringify(myQueue.front));
console.log(myQueue.front)
console.log(myQueue.rear)
  
function reverseQueuequeue(queue) {

  if (!queue.isEmpty()) return null;

  for (let i = 0; i < queue.size; i++) {

    let 
  }

}

reverseQueuequeue(myQueue)
