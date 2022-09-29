function deleteByEmail() {
    let inputValueElement = document.getElementsByName("email")[0];
    let inputEmail = inputValueElement.value;
    let deleted = false;
    let tableRows = document.querySelectorAll("tbody tr");
    for(let row of tableRows){
        if(row.children[1].textContent == inputEmail){
            row.remove();
            deleted = true;
        }
    }
    let outputElement = document.getElementById("result");
    deleted == true ? outputElement.textContent = "Deleted." : outputElement.textContent = "Not found.";
}