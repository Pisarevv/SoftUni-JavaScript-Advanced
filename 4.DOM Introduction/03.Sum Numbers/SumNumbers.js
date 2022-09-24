function calc() {
    debugger;
    let firstNumber = document.getElementById("num1");
    let secondNumber = document.getElementById("num2");
    let resultNode = document.getElementById("sum");

    let result = Number(firstNumber.value) + Number(secondNumber.value);
    resultNode.value = result;
}
