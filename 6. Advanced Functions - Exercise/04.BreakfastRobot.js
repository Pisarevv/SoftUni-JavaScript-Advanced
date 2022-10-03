function solution(command,item,quantity){

    let recepies = createRecepie();
    let ingredients  = createIngridients();



    return {
        restock : () => {

        },
        prepare : () => {

        },
        report : () => {

        }
    }




    function createRecepie() {
        return {
            apple: {carbohydrate : 1, flavour : 2},
            lemonade : {carbohydrate : 10 , flavour : 20},
            burger : {carbohydrate : 10 ,fat : 7, flavour : 20},
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