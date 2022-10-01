function solve() {

  let buttons = document.querySelectorAll("button");
  let generateButton = buttons[0];
  let buyButton = buttons[1];

  let textAreas = document.querySelectorAll("textarea");
  let inputArea = textAreas[0];
  let outputArea = textAreas[1];

  let placeToAddRows = document.querySelector("table tbody");

  generateButton.addEventListener('click', addFurnitureToTable);
  buyButton.addEventListener('click', checkOutItems);


  function addFurnitureToTable () {
    let inputs = JSON.parse(inputArea.value);
    for(let currInput of inputs){
      let newRow = document.createElement('tr');
      newRow.innerHTML =
      `<td><img src=${currInput.img}></td>` +
      `<td><p>${currInput.name}</p></td>` +
      `<td><p>${currInput.price}</p></td>` +
      `<td><p>${currInput.decFactor}</p></td>` +
      `<td><input type="checkbox"></td>`;
      placeToAddRows.appendChild(newRow);
    }

  };

  function checkOutItems () {
    let tableRows = document.querySelectorAll("tbody tr");
    let boughtFurniture = [];
    let totaPrice = 0;
    let averageDecoratinfactor = 0;

    for(let row of tableRows){
      let currentRowCheck = row.children[4].children[0].checked;
      if(currentRowCheck){
        boughtFurniture.push(row.children[1].innerText);
        totaPrice += Number(row.children[2].innerText);
        averageDecoratinfactor +=Number (row.children[3].innerText);
      }
    }


    let outputString = `Bought furniture: ${boughtFurniture.join(", ")}` + "\n"
     + `Total price: ${totaPrice.toFixed(2)}` + "\n" + 
     `Average decoration factor: ${Number(averageDecoratinfactor/boughtFurniture.length)}`;
     outputArea.value = outputString;

  };
}