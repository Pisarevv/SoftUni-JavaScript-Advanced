function sortByTwoCriteria(inputArray){
    let sortedArray = inputArray.sort((a,b) => {
       return ((a.length - b.length ) || (a.localeCompare(b)))
    });

    console.log(sortedArray.join(`\n`));
}

sortByTwoCriteria(['alpha', 
'beta', 
'gamma']
);