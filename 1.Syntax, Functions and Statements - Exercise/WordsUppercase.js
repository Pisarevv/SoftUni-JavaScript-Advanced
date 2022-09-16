function MakeWordsUppercase(input){
    let inputString = input;
    const regex = new RegExp(/\w+/g);
    let extractedWords = inputString.match(regex);
    let formatedWords = [];
    extractedWords.forEach(x => 
     {
        let formated = x.toUpperCase();
        formatedWords.push(formated);
     });
    console.log(formatedWords.join(', '));

}





MakeWordsUppercase('Hi, how are you?')