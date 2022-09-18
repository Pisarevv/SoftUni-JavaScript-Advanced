function ExtreactIncreasingSubset(inputArr){
    let res = [];
    let biggestOne = inputArr[0];
    res = inputArr.reduce((acc,current) => {
        if(current >= biggestOne){
            acc.push(current);
            biggestOne=current;
        }
        return acc;
    }, [])
    console.log(res)
    return res;
}


ExtreactIncreasingSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24,
53,
25,
6565]
    );

 ExtreactIncreasingSubset([20, 
        3, 
        2, 
        15,
        6, 
        1]
        );