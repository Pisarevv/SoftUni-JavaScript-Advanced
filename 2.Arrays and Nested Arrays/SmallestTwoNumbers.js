function FindSmallestTwoNumbers(input){
    let inputArray = input;
    inputArray.sort((a,b)=> a-b);
    let smallestElements = input.slice(0,2);
    console.log(smallestElements.join(' '));
}


FindSmallestTwoNumbers([30, 15, 50, 5]);