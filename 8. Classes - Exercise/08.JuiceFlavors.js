function createBottles(inputString){

    let map = new Map();
    let poducedBottles = new Map();
    for(let inputPair of inputString){
        let fruit = inputPair.split(' => ')[0];
        let quantity = Number(inputPair.split(' => ')[1]);

        if(!map[fruit]){
            map[fruit] = 0;
        }
        map[fruit] += quantity;

        while(true){
            let currentProductQuantity = map[fruit];
            if(currentProductQuantity - 1000 < 0){
                break;
            }
            else{
                if(!poducedBottles[fruit]){
                    poducedBottles[fruit] = 0;
                }
                poducedBottles[fruit]++;
                map[fruit] -= 1000;
            }
        }

    }

    for(let key in poducedBottles){
        console.log(`${key} => ${poducedBottles[key]}`);
    }

   
    
}



createBottles(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']

)