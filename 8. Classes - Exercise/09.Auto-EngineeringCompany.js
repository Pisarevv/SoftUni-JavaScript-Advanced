function registerCars(inputString){
    
    let manifacturer = new Map();
   

    for(let input of inputString){
        let brand = input.split(" | ")[0];
        let model = input.split(" | ")[1];
        let producedCars = Number(input.split(" | ")[2]);

        if(!manifacturer[brand]){
            manifacturer[brand] = new Map();
        }
        if(!manifacturer[brand][model]){
            manifacturer[brand][model] =0;
        }

        manifacturer[brand][model] += producedCars;
       
    }

    for(let key in manifacturer){
        console.log(key);
        for(let keyValue in manifacturer[key]){
            console.log(`###${keyValue} -> ${manifacturer[key][keyValue]}`)
        }
    }




}



registerCars(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);