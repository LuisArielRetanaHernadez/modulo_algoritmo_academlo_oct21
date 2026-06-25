class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack{
    constructor(maxLength){
      this.top = null;
      this.bottom = null;
      this.minValue = {value: null, next: null};
      this.maxValue = {value: null, next: null};
      this.maxLength = maxLength;
      this.length = 0;
    }
  
    push(value){
      if(!this.isFull()){
        //Creamos un nodo de tipo LinkedList
        const newNode = new Node(value);
        if(!this.top){
          this.top = newNode;
          this.bottom = newNode;
        }else{
          newNode.next = this.top; //Apuntamos al elemento que está en la cima
          this.top = newNode;
        }
        this.size++;
        return this;
      }
      return Error("The stack is full");
    }
  
    peek(){
      
    }
  
    isEmpty(){
      
    }
  
    isFull(){
      
    }
  
    pop(){
      
    }
  
    // ===== Reto ====
    checkMin(node){
      //Método auxiliar para revisar si el nodo ingresado contiene un valor más pequeño del que se tiene en minValue
  
      //Regresa true o false
    }
  
    checkMax(node){
      //Método auxiliar para revisar si el nodo ingresado contiene un valor más grande del que se tiene en maxValue
  
      //Regresa true o false
    }
    
    min(){
      //Regresa el nodo con el valor más pequeño
    }
  
    max(){
      //Regresa el nodo con el valor más grande
    }
  }