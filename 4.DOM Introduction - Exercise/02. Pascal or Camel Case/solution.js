function solve() {
  let inputText = document.getElementById("text").value;
  let typeCase = document.getElementById("naming-convention").value;
  let outputNode = document.getElementById("result");
  let result = '';

  switch(typeCase){
    case"Camel Case":{
      let stringToModify = inputText.split(" ");
      for(let i = 0; i < stringToModify.length; i++){
        let currPart = stringToModify[i].toLowerCase();
        if(i == 0){
          result += currPart;
          continue;
        }
        result += currPart[0].toUpperCase() + currPart.substring(1);
      }
      break;
    }
    case"Pascal Case":{
      let stringToModify = inputText.split(" ");
      for(let i = 0; i < stringToModify.length; i++){
        let currPart = stringToModify[i].toLowerCase();
        result += currPart[0].toUpperCase() + currPart.substring(1);
      }
      break;
    }
    default:
      result = "Error!";
  }
   outputNode.textContent = result;

}