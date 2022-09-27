function solve() {

    let button = document.querySelectorAll("button")[0];
    button.addEventListener("click", convert); 
    let inputValue = document.getElementById("input").value;

    let outputType = document.querySelectorAll("select#selectMenuTo")[0];
    let binarySelect = document.createElement("option");

    binarySelect.innerText = 'Binary';
    binarySelect.value = 'binary';
    outputType.appendChild(binarySelect);
    let hexadecimalSelect = document.createElement("option");
    hexadecimalSelect.innerText = 'Hexadecimal';
    hexadecimalSelect.value = 'hexadecimal';
    outputType.appendChild(hexadecimalSelect);


    function convert(){

    }
}