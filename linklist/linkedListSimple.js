class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(value) {
        let newNode = new Node(value)
        if (this.head === null) {
            this.head =  newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    remove (value) {
        let currentNode = this.head;
        
        while (currentNode.next !== null) {
            if (currentNode.next && currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                this.size--;
                return this.head;
            }
            currentNode = currentNode.next;
        }
        return value;
    }

    traverse () {
        let currentNode = this.head;
        let list = []
        while (currentNode) {
            list.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return list;
    }
}

const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(5);

// console.log(JSON.stringify(linkedList.head.next.next));
console.log(JSON.stringify(linkedList.remove(3)));
console.log(linkedList.traverse());