function returnCityRecordObject(name,population,treasury){
    return {
        name,population,treasury
    }
}


let city = returnCityRecordObject('Tortuga',
7000,
15000
);

console.log(city);