function encodeAndDecodeMessages() {
    //buttons
    let buttons = document.querySelectorAll("button");
    let encodeButton = buttons[0];
    let decodeButton = buttons[1];
    //massages
    let textAreas = document.querySelectorAll("textarea");
    inputArea = textAreas[0];
    outputArea = textAreas[1];

    encodeButton.addEventListener('click', encodeAndSend);
    decodeButton.addEventListener('click', decodeAndRead);

    function encodeAndSend () {
        let inputText = inputArea.value;
        let encodedString = "";
        for(let i = 0; i < inputText.length; i++){
            let newChCode = Number(inputText.charCodeAt([i])) + 1;
            encodedString += (String.fromCodePoint(newChCode));

        }
        outputArea.value = encodedString;
        inputArea.value = "";    

    }

    function decodeAndRead () {
        let inputText = outputArea.value;
        let decodedString = "";
        for(let i = 0; i < inputText.length; i++){
            let newChCode = Number(inputText.charCodeAt([i])) - 1;
            decodedString += (String.fromCodePoint(newChCode));

        }
        outputArea.value = decodedString;

    }
}