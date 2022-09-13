function GetLargestNumber(first,second,third){
    let biggestNumber = undefined;
    if(first >= second && first >= third){
        biggestNumber = first;
    }
    else if(second >= first && second >= third){
        biggestNumber = second;
    }
    else{
        biggestNumber = third;
    }

    console.log(`The largest number is ${biggestNumber}.`);
}
