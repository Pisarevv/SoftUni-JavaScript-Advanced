

function cardObject (intpuFace,inputSuit) {
    
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = "SHDC";
    try {
        if(validFaces.indexOf(intpuFace) == -1){
            throw new error;
        }
        if(!validSuits.includes(inputSuit)){
            throw new error;
        }
    }

    catch (error) {

      console.error(error);

    }
   

    if(inputSuit == 'S'){
        inputSuit = '\u2660';
    }
    if(inputSuit == 'H'){
        inputSuit = '\u2665';
    }
    if(inputSuit == 'D'){
        inputSuit = '\u2666';
    }
    if(inputSuit == 'C'){
        inputSuit = '\u2663';
    }
    

    return {
        face : intpuFace,
        suit : inputSuit,
        toString : () => {
             console.log(`${intpuFace}${inputSuit}`);
        }
    }

}

let card = cardObject('1', 'S');
card.toString();