function createSortedList(){
    return{
        values:[],
        size : 0,
        add: function(inputValue){
            this.values.push(inputValue);
            this.size++;
            this.values.sort((a,b) => a - b);
        },
        remove: function(index){
            if(index > 0 && index < this.values.length){
                this.values.splice(index,1);
                this.values.sort((a,b) => a - b);
                this.size--;
            }
            
        },
        get: function(index){
            if(index > 0 && index < this.values.length){
                return this.values[index];
            }
        }
        
        
    }

}



let list = createSortedList();
let expectedArray =[];
for (let i = 0; i < 20; i++) {
    expectedArray.push(Math.floor(Math.random() * 200) - 100);
}
// Add to collection
for (let i = 0; i < expectedArray.length; i++) {
    list.add(expectedArray[i]);
}
console.log(list.size)
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
