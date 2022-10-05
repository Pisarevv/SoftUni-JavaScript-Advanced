function solution(){

    let recepies = createRecepie();
    let ingredients  = createIngridients();
    let operations = createOperations();

    return (input) => {
        let command = input.split(' ')[0];
        let item = input.split(' ')[1];
        let quantity = Number(input.split(' ')[2]);
        
    switch(command){
        case"restock":{
             return operations.restock(item,quantity);
            
        }
        case"prepare":{
            return operations.prepare(item,quantity);
            
        }
        case"report":{
            return operations.report(item,quantity);

        }
    }
    }



    function createOperations () {
        return {
            restock : (microelement,quantity) => {
                 ingredients[microelement] += quantity; 
                 return `Success`;
            },
            prepare : (recipe,quantity) => {
                let ingredientsCopy = JSON.stringify(ingredients);
                ingredientsCopy = JSON.parse(ingredientsCopy);
                let currentRecipie = recepies[recipe];
                for(let ingredient in currentRecipie){
                    let currentNeededIngridientQuantity = currentRecipie[ingredient];
                    let currentAviableIngridientQuantity = ingredientsCopy[ingredient];

                    if ( currentNeededIngridientQuantity > currentAviableIngridientQuantity){
                        return (`Error: not enough ${ingredient} in stock`);                       
                    }
                    else{
                        ingredientsCopy[ingredient] -= currentNeededIngridientQuantity;
                        
                    }
                }
                ingredients = ingredientsCopy;
                return `Success`;
                
    
            },
            report : () => {
                return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
    
            }
    }
    }




    function createRecepie() {
        return {
            apple: {carbohydrate : 1, flavour : 2},
            lemonade : {carbohydrate : 10 , flavour : 20},
            burger : {carbohydrate : 5 ,fat : 7, flavour : 3},
            eggs : {protein : 5 ,fat : 1, flavour : 1},
            turkey : {protein : 10, carbohydrate : 10 ,fat : 10, flavour : 10},

        }
    }

    function createIngridients(){
        return {
            carbohydrate : 0,
            flavour : 0,
            protein : 0,
            fat : 0
        }
    }
}



let manager = solution (); 
console.log (manager ("prepare turkey 1")); 
console.log (manager ("restock protein 10")); 
console.log (manager ("prepare turkey 1")); 
console.log (manager ("restock carbohydrate 10")); 
console.log (manager ("prepare turkey 1")); 
console.log (manager ("restock fat 10")); 
console.log (manager ("prepare turkey 1")); 
console.log (manager ("restock flavour 10")); 
console.log (manager ("prepare turkey 1"));
console.log (manager ("report")); 
