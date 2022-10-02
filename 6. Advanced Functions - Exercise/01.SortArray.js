function returnSortedArray(inputArr,sortType){
    return  sortType == 'asc' ? inputArr.sort((a,b) => a - b) : inputArr.sort((a,b) => b - a)
}