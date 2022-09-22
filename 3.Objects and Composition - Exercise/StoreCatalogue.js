function sortCatalogue(inputArr){
  let sortedResult = inputArr.sort((a,b) => a.localeCompare(b));
  let lastLetter;
  for(let object of sortedResult){
    let currentLetter = object[0];
    let objectArgs = object.split(' : ');
    if(currentLetter !== lastLetter)
    {
      console.log(currentLetter);
    }
    console.log(`  ${objectArgs[0]}: ${objectArgs[1]}`);
    lastLetter = currentLetter;
  }
}


sortCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);