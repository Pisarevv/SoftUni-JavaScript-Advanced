function extract(content) {
   debugger;
   let pattern = /\(([^)]+)\)/g;
   let extractedContent = document.getElementById(content).textContent;
   let matches = extractedContent.matchAll(pattern);
   let result = [];
   for(let element of matches){
    result.push(element[1]);
   }
   return result.join('; ');

}