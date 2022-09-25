function sumTable() {
    debugger;
   let selected = document.querySelectorAll("table tbody tr");
   let result = 0;
   for (let i = 1; i< selected.length -1; i++){
       let extracted = selected[i].children;
       result+= Number(extracted[1].textContent);
   }

   let targetNode = document.getElementById("sum");
   targetNode.textContent = result;
}