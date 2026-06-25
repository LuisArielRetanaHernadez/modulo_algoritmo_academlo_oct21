class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
class LinkedListDoubly {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    insert(value) {
      let newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        //El nuevo nodo en el puntero next (next) a la cabeza
        newNode.next = this.head;
        //El nodo de la cabeza en el puntero (prev) al nuevo nodo
        this.head.prev = newNode;
        //Apuntamos la cabeza al nuevo nodo
        this.head = newNode;
      }
      this.size++;
    }
  
    traverse() {
      let list = [];
      //1. crear nuestro currentNode
      let currentNode = this.head;
      //2. colocar mi while
      while (currentNode) {
        //3. meter los valores en la lista
        list.push(currentNode.value);
        //4. Continuar visitando los siguientes nodos...
        currentNode = currentNode.next;
      }
      return list;
    }
  
    reverse() {
      let list = [];
      //1. crear nuestro currentNode
      let currentNode = this.tail;
      //2. colocar mi while
      while (currentNode) {
        //3. meter los valores en la lista
        list.push(currentNode.value);
        //4. Continuar visitando los siguientes nodos...
        currentNode = currentNode.prev;
        console.log(currentNode)
      }
      return list;
    }
  
    remove(index){
      let currentNode = this.head;
      let count = 0;
      if (!index) {
        this.size--;
        currentNode = currentNode.next;
        currentNode.prev = null;
        return currentNode;
      }

      let currentNext = {};
      let currentprev = {};
      
      while (currentNode) {
        currentNext = currentNode.next;
        currentprev = currentNode.prev;
        if (count === index) {
          currentNext.prev = currentprev
          currentprev.next = currentNext
          this.size--;
          return index;
        }
        currentNode = currentNode.next;
        count++;
      }
      
    }
    
    insertBefore(index, value) {
      let newNode = new Node(value);
      let currentNode = this.head;
      let count = 0;
      let currentNext = {};

      index <= 0 ? 0 : index -= 1
      while (currentNode) {
        
        if (count === index) {
          // obtenemos el next del siguiente nodo
          currentNext = currentNode.next;
          // el nuevo nodo apunto asia el next del nodo anteriro
          newNode.next = currentNext;
          // 
          currentNext.prev = newNode
          // el nuevo nodo apunto prev del nodo anterior
          newNode.prev = currentNode;
          // currentNode hace next al nuevo nodo
          currentNode.next = newNode;

          return this.head

        }

        currentNode = currentNode.next;
        count++;

      }

    }
}
const myDoublyLinkedList = new LinkedListDoubly();
  myDoublyLinkedList.insert(10);
  myDoublyLinkedList.insert(8);
  myDoublyLinkedList.insert(6);
  myDoublyLinkedList.insert(4);
  myDoublyLinkedList.insert(2);
//   console.log(myDoublyLinkedList.traverse());
  // console.log(myDoublyLinkedList.reverse());
  // console.log(myDoublyLinkedList.remove(1));
  // console.log(myDoublyLinkedList.head.next);
  console.log(myDoublyLinkedList.insertBefore(0, 34))
  
  function isPalindrome(linkedList){
    return false;
  }
  
  console.log(isPalindrome(myDoublyLinkedList)); 