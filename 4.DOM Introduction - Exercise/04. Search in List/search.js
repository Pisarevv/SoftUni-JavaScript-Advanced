function search() {
   let selectedItems = document.querySelectorAll("#towns li");
   let elementToContain = document.getElementById("searchText").value;
   let matchesNode = document.getElementById("result");
   let matches = 0;
   for(let node of selectedItems){
     if(node.innerText.includes(elementToContain)){
      node.style.fontWeight = "bold";
      node.style.textDecoration = "underline";
      matches ++;
     }
     else{
      node.style.fontWeight = "normal";
      node.style.textDecoration= "none";  
     }
   }
   matchesNode.innerText = `${matches} matches found`;
}
