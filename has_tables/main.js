class HashTable{
    constructor(size){
      this.data = new Array(size); //Donde almacenaremos los pares clave/valor
      this.arrKeys = []
    }
  
    /**
     * 
     * @param {any} key
     * resive un valor any primitivos donde hace calculos para obtener el index 
     * del arryKeys
     * @returns has
     */
    _hash(key){
      let hash = 0;

      if (!this.arrKeys.includes(key)) this.arrKeys.push(key)

      for(let i = 0; i < key.length; i++){
        hash = (key.charCodeAt(i)**i) % this.data.length;
      }
      
      return hash;
    }

    /**
     * retorna todas las keys del hashtables
     * @returns this.arrakes
     */  
    keys(){

      return this.arrKeys
    }

    /**
     * retorna todos las valores de las keys del hash table
     * @returns valor n
     */
    values(){
        let values = []
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] !== undefined) {
                values.push(this.data[i][0][1])
            }
        }
        return values
    }
    
  
    /**
     * 
     * @param {any} key 
     * el paremtro key es procesado en la funcion hash para obtener el index del array this.data
     * @param {any} value 
     * el parameto value es almacenado junto con el parameto key en el array this.data en el index key
     * @return NONE
     */
    set(key, value){
      //1. Convertir la clave (key) en una dirección
      let index = this._hash(key);
      //2. Tomo mi arreglo y me ubico en la dirección que me arrojo _hash
      let bucket = this.data[index];
      //3. Si el bucket es true y si el nuevo valor es igual al anterio (key) se termina la ejecucion de la fucnion
        console.log('bucket: ', Boolean(bucket))
      if (bucket) return;
        console.log('pasa bucket: ', bucket) 
      //4. Si no hay nada en el bucket, lo agrego
      if (bucket && bucket.length > 0) {
        //3. Agrego el par clave/valor .push
        this.data[index].push([key, value]);
      } else {
        // aqui enre el primer dato del hash table
        this.data[index] = [];
        this.data[index].push([key, value]);
      }
    }
  
    /**
     * 
     * @param {any} key 
     * el parametro key es procesado en la funcion hash para obtener el index del array this.data
     * para obtener el valor de la clave
     * @returns any(value)
     */
    get(key){
      // const hash = this._hash(key)
      // return this.data[hash][1] [["Casa", "House"], aarr]

      const has = this._hash(key)

      if(this.data[has] && this.data[has].length > 0) {
        return this.data[has].find(n => n[0] === key)[1]
      }

    }
  }
  
const user2 = new HashTable(10);
console.log(user2.data)
user2.set("Casa", "House");
console.log(user2.data)
user2.set("Casa", "nose")
user2.set("Mabi", "Mi esperanza")

console.log(user2.get("Mabi"));
console.log(user2.keys());
console.log('--------------')
console.log(user2.values());