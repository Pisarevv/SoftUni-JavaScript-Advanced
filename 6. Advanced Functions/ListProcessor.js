function solveAndPrint(input){
    let inputArr = input;
    let processedArray = [];
    let commands = createOpernds();

    (()=> {
        for(let input of inputArr){
            let [command,value] = input.split(' ');
            commands[command](value);
        }
    })()


    function createOpernds ()
    {
        return {
        add : (value) => processedArray.push(value),
        remove : (value) => {
            let occurances = findAllIndexes(value);
            while(occurances.length > 0){
                let currentIndex = occurances.pop();
                processedArray.splice(currentIndex,1);
            }

        },
        print : () => console.log(processedArray.join())
    }
    }

    function findAllIndexes(searchedValue){
        let foundIndexes = [];

        for(let i = 0; i < processedArray.length; i++){
            if(processedArray[i] == searchedValue){
                foundIndexes.push(i);
            }

        }
        return foundIndexes;

    }




}



solveAndPrint(['add hello', 'add again', 'remove hello', 'add again', 'print']);