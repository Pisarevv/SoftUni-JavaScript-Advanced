function ReturnTownPopulation(inputArray){
    let splitArray = inputArray.toString().split(',');
    let result = [];

    for(let city of splitArray){
        let splitString = city.split("<->");
        let cityName = splitString[0];
        let cityPopulation = splitString[1];

        let resultObject = generateTownObject(cityName,cityPopulation);
        if(result.some(x => x.cityName == resultObject.name)){
            x.population == resultObject.name;
            continue;
        }
        result.push(resultObject);
    }

    for(const cityObject of result){
        console.log(`${cityObject.name}:${cityObject.population}`);
    }

    function generateTownObject(name,population){
        return{
            name,population
        }
    }
}



ReturnTownPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);