function addItem() {
    let inputValue = document.getElementById("newItemText").value;
    let output = document.getElementById("items");
    let liElement = document.createElement('li');
    liElement.textContent = inputValue;
    document.getElementById("newItemText").value = '';
    output.appendChild(liElement);
    

}