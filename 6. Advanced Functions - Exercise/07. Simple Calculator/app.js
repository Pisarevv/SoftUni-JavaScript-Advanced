function calculator() {

    let selector1;
    let selector2;
    let resultSelector; 

    return {
        init : (selectedSelector1,selectedSelector2,selectedResultSelector) => {

            selector1 = document.querySelector(selectedSelector1)
            selector2 = document.querySelector(selectedSelector2);
            resultSelector = document.querySelector(selectedResultSelector);         

        },
        add : () => {

            resultSelector.value = Number(selector1.value) + Number(selector2.value);
        },
        subtract : () => {
          
            resultSelector.value = Number(selector1.value) - Number(selector2.value);
        }
    }

}


const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 


