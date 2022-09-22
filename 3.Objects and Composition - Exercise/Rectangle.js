function rectangle(width,height,color){
    return{
        width,
        height,
        color,
        calcArea:function(){
           return height*width;
        }
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
