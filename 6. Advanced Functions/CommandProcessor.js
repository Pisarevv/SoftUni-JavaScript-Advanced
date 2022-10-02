function solution(){
    let processedString = '';

    return {
        append : (value) => processedString += value,
        removeStart : (value) => processedString = processedString.substring(value),
        removeEnd : (value) => processedString = processedString.substring(0 , processedString.length - value),
        print : () => console.log(processedString)
    }


}



let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
