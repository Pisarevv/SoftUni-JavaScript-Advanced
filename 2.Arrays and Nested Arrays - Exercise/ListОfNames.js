function SortNames(inputArray){
    let sortedNames = inputArray.sort((a,b) => a.localeCompare(b));
    sortedNames.forEach((x,i) => console.log(`${i+1}.${x}`));
}


SortNames(["John", "Bob", "Christina", "Ema"]);