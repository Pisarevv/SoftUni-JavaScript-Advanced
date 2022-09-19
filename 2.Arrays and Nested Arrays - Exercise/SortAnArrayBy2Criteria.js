function sortByTwoCriteria(inputArray){
    let sortedArray = inputArray.sort((a,b) => {
       return ((a.length - b.length ) || (a.localeCompare(b)))
    });

    console.log(sortedArray);
}

sortByTwoCriteria(['alpha', 
'beta', 
'gamma']
);