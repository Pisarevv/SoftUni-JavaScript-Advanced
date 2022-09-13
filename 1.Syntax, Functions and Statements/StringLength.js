function StringLength (first,second,third){
    let result = 0;
    result += first.length;
    result +=second.length;
    result +=third.length;
    let average = result / 3;
    console.log(result);
    console.log(average.toFixed(0));
}


StringLength('chocolate', 'ice cream', 'cake');