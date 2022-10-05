const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const validSuits = "SHDC";

function cardObject (intpuFace,inputSuit) {
    let card ='';
    if(validFaces.indexOf(intpuFace) == -1){
        console.log("Error");
    }
    if(!validSuits.includes(inputSuit)){
        console.log("Error");
    }

    
    if(inputSuit == 'S'){
        console.log(`${intpuFace}${'\u2660'}`);
    }
    if(inputSuit == 'H'){
        onsole.log(`${intpuFace}${'\u2665'}`);
    }
    if(inputSuit == 'D'){
        onsole.log(`${intpuFace}${'\u2666'}`);
    }
    if(inputSuit == 'C'){
        onsole.log(`${intpuFace}${'\u2663'}`);
    }

    return card;
    
     return function toString () {

       


    }


}

let card = cardObject('A', 'S');
card.toString();