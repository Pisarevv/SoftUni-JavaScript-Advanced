function solve() {
  let extractedText = document.getElementById("input").value;
  let splitData = extractedText.split(".").filter(x => x.length > 0);
  let outputNode = document.getElementById("output");
  let result = '';
  for(let i = 0; i<splitData.length ; i+=3){
    let buffer = '<p>';
    for(let x = 0 ; x < 3; x++){
      if(splitData[i+x]){
        buffer += splitData[i+x] + '.';
      }
    }
    buffer +='</p>';
    result += buffer;
  }
  outputNode.innerHTML = result;
}