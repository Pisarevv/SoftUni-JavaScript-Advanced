function cardObject (intpuFace,inputSuit) {
    
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = "SHDC";

        if(validFaces.indexOf(intpuFace.toString()) === -1){
            throw new Error('Error');
        }

        if(!validSuits.includes(inputSuit.toString())){
            throw new Error('Error');
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
        toString () {
             return this.face + this.suit;
        }
    }

}


console.log(cardObject(1, 'S').toString())