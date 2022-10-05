function printDeckOfCards(cards){


    let result = [];

    for(let card of cards){
        let face;
        let suit;
        if(card.length > 2){
            face = card[0] + card[1];
            suit = card[2];
        }
        else{
            face = card[0];
            suit = card[1];
        }

        try{
            
            result.push(createCard(face,suit));
        }
        catch (e){
            console.log(e.message);
        }
    }

    console.log(result.join(" "));




    function createCard (intpuFace,inputSuit) {
    
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = "SHDC";
    
            if(validFaces.indexOf(intpuFace.toString()) === -1){
                throw new Error(`Invalid card: ${intpuFace}${inputSuit}`);
            }
    
            if(!validSuits.includes(inputSuit.toString())){
                throw new Error(`Invalid card: ${intpuFace}${inputSuit}`);
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
}


printDeckOfCards(['AS', '10D', 'KH', '2C']);