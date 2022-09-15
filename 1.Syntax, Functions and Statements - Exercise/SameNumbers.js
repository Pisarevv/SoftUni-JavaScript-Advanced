function AreAllNumbersTheSame(input) {
    let digits = input.toString().split('');
    let realDigits = digits.map(Number);
    let sumOfDigits = realDigits.reduce((total,current) => total + current);
    for(i= 0; i< realDigits.length-1; i++){
        if(Number(realDigits[i] !== Number(realDigits[i+1]))){
            console.log(false);
            console.log(sumOfDigits);
            return;
        }
    }
    
    console.log(true);
    console.log(sumOfDigits);

}

AreAllNumbersTheSame(222222);