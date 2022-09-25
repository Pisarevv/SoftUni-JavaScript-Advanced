function subtract() {

    let firstNumber = Number(document.getElementById("firstNumber").value);
    let secondNumber = Number(document.getElementById("secondNumber").value);
    let outputNode = document.getElementById("result");
    outputNode.textContent = firstNumber - secondNumber;

}