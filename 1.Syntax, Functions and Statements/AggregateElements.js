function PreformDifferentOperations(params){

    let sum = 0;
    let inversedSum = 0;
    let concatedString = '';
    for (i=0; i < params.length; i++){
        sum += Number(params[i]);
        inversedSum +=1/Number(params[i]);
        concatedString +=params[i];
    }


    console.log(sum);
    console.log(inversedSum);
    console.log(concatedString);
}


PreformDifferentOperations([1, 2, 3]);