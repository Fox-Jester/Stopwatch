


class Stack{
    #_storage = []
    constructor(){
        this.count = 0
        
    }
    push(value){
        this.count++
        this.#_storage.push(value);
        console.log(this.#_storage)
    }
    pop(){
        if(this.#_storage.length === 0){
            throw new Error("stack empty yo")
        }
        this.count--
        return this.#_storage.pop();
    }
    peek(){
        if(this.#_storage.length === 0){
            throw new Error("stack empty yo")
        }
        return this.#_storage.at(-1);
    }
  
}

const st = new Stack;
