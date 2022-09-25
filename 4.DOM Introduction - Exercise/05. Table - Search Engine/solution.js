function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let extractedNodes = document.querySelectorAll(".container tbody tr");
      let textToSearch = document.getElementById("searchField").value;
      for(let node of extractedNodes){
            node.classList.remove('select');  
      }
      for(let node of extractedNodes){
         if(node.innerHTML.includes(textToSearch)){
            node.classList.add('select');
         }
      }
   }
}