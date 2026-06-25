class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(maxSize) {
      this.top = null;
      this.maxSize = maxSize;
      this.size = 0;
    }
  
    push(value) {
      const newNode = new Node(value);
      if (!this.top) {
        this.top = newNode;
      } else if(!this.isFull()){
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
  
  function checkBalance(str){
    //Revisar si un string cuenta con parentesis balanceados

    let pila = new Stack(str.length)

    for (let i = 0; i < str.length; i++) {

        if (pila.isEmpty() && str[i] === ')') return false

        if (str[i] === '(') pila.push(str[i]) 

        if (str[i] === ')' && !pila.isEmpty()) pila.pop()
    }

    return pila.isEmpty()
  }
  
  let parentesis = '(()())()';
  
  console.log(checkBalance(parentesis));