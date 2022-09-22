function printTownsWithInfo(inputArr){
  let tableColumns = splitAndTrim(inputArr[0]);
  let result = [];
  for(let i = 1; i < tableColumns.length; i++){
    let currentRow = inputArr[i];
    let rowInformation = splitAndTrim(currentRow);
    let town = rowInformation[0];
    let latitude = Number(rowInformation[1]);
    let longitude = Number(rowInformation[2]);
    
    let object = {
        [tableColumns[0]]:town,
        [tableColumns[1]]:Number((latitude).toFixed(2)),
        [tableColumns[2]]:Number((longitude).toFixed(2))
    }
    result.push(object);

  }

  return JSON.stringify(result);
  

  function splitAndTrim(input){
    return input.split('|').filter(element => element).map(x => x.trim());
  }
}



printTownsWithInfo(['| Town | Latitude | Longitude |',
'| 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)