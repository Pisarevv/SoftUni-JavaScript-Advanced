function extractText() {
    debugger;
    let matches = document.querySelectorAll("ul li");
    let result = '';
    for (let element of matches){
        result += (element.textContent + '\n');
    }

    let matchForReplacement = document.getElementById('result');
    matchForReplacement.textContent = result.trimEnd();
    
}