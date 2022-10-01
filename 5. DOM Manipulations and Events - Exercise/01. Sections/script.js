function create(words) {
   let targetOutputElement = document.getElementById("content");
   for(let word of words){
      let newDiv = document.createElement("div");
      newDiv.addEventListener('click', showChildren);
      let newParagraph = document.createElement("p");
      newParagraph.textContent = word;
      newParagraph.style.display = "none";
      newDiv.appendChild(newParagraph);
      targetOutputElement.appendChild(newDiv);
   }



   function showChildren(e){
      e.target.children[0].style.display = "";
   }
}