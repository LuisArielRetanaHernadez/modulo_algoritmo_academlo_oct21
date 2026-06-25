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

    insert (value) {
       let currentNode = new Node(value)
       
       if (!this.head) {       
        this.head = currentNode;
        this.tail = currentNode;
        return this.head;     
       }

      currentNode.next = this.head;
      this.head.prev = currentNode;
      this.head = currentNode;

    }
}

const linked = new LinkedListDoubly()

linked.insert(10)
linked.insert(11)
console.log(linked.head.next)