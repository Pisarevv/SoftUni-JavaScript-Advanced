function PrintingRectangle(input = 5){
    
    for (i=0; i< input; i++){
        let createdString = '';
        for (k=0; k< input; k++){
            createdString +='*';
        }
        console.log(createdString);
    }
    
}

PrintingRectangle(2);