function findLowestPriceInCity(inputArray){

    let result = {};
    let resultArray = [];

    for(let data of inputArray){
        data = data.split(' | ')
        let townName = data[0];
        let productType = data[1];
        let priceListed = Number(data[2]);
        let object = {product:productType,town:townName,price:priceListed};
        if(!resultArray.some(x => x.product == productType)){
            resultArray.push(object);
        }
        else{
            let obj = resultArray.find(x => x.product == productType);
            if(obj.price > priceListed){
                obj.price = priceListed;
                obj.town = townName;
            }
        }
    }
    for(let product of resultArray){
        console.log(`${product.product} -> ${product.price} (${product.town})`)
    }


}

findLowestPriceInCity(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);