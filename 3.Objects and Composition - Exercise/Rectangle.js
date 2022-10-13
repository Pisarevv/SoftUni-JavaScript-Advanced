function rectangle(width,height,color){

    let modifiedColor = color[0].toUpperCase() + color.substring(1,color.length)

    return{
        width,
        height,
        color: modifiedColor,
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
