function printTownsWithInfo(inputArr){
  let tableColumns = splitAndTrim(inputArr[0]);
  let result = [];
  for(let i = 1; i < inputArr.length; i++){
    let currentRow = inputArr[i];
    let rowInformation = splitAndTrim(currentRow);
    let town = rowInformation[0];
    let latitude = Number(rowInformation[1]);
    let longitude = Number(rowInformation[2]);
    
    let object = {
        Town:town,
        Latitude:Number((latitude).toFixed(2)),
        Longitude:Number((longitude).toFixed(2))
    }
    result.push(object);

  }

  return JSON.stringify(result);
  

  function splitAndTrim(input){
    return input.split('|').filter(element => element).map(x => x.trim());
  }
}



printTownsWithInfo(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |']

)