function addItem() {
    let inputValue = document.getElementById("newItemText").value;
    let output = document.getElementById("items");
    let liElement = document.createElement('li');
    liElement.textContent = inputValue;
    let remove = document.createElement('a');
    let linkText = document.createTextNode("[Delete]");
    remove.appendChild(linkText);
    remove.href = "#";
    remove.addEventListener('click', deleteItem);
    liElement.appendChild(remove);
    document.getElementById("newItemText").value = '';
    output.appendChild(liElement);

    function deleteItem(){
        liElement.remove();
    }
    

}