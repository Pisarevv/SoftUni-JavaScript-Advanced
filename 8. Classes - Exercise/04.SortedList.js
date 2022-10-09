class List{
    constructor(){
        this.buffer = [];
        this.size = 0;
    }

    add(input) {
        this.buffer.push(input);
        this.size ++;
        this._sort();
    }

    remove(index){
        if(index < 0 || index > this.size - 1){
            return;
        }
        this.buffer.splice(index,1);
        this.size --;
        this._sort();

    }

    get(index){
        if(index < 0 || index > this.size - 1){
            return;
        }
        return this.buffer[index];
    }


    _sort(){
        this.buffer = this.buffer.sort((a,b) => {return a - b});
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
list.add(54);
list.add(2);
console.log(list.get(100)); 
list.remove(1);
console.log(list.get(1));



