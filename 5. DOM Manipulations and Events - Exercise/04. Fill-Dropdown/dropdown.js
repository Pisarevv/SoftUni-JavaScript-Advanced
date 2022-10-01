function addItem() {
    let inputTextElement = document.getElementById("newItemText");
    let inputValueElement = document.getElementById("newItemValue");
    let dropDownMenu = document.getElementById("menu");

    let newOption = document.createElement("option");
    newOption.textContent = inputTextElement.value;
    newOption.value = inputValueElement.value;
    dropDownMenu.appendChild(newOption);
    inputTextElement.value = "";
    inputValueElement.value = "";
}