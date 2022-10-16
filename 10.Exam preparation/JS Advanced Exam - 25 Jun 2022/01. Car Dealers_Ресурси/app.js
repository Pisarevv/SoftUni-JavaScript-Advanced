window.addEventListener("load", solve);

function solve() {

  //fields
  let makeField = document.getElementById("make");
  let modelField = document.getElementById("model");
  let yearField = document.getElementById("year");
  let fuelField = document.getElementById("fuel");
  let originalCostField = document.getElementById("original-cost");
  let sellingPriceField = document.getElementById("selling-price");

  let publishedCarsTable = document.getElementById("table-body");

  let soldCarsTable = document.getElementById("cars-list");

  let totalProfitField = document.getElementById("profit");

  //buttons
  let publishButton = document.getElementById("publish");
  publishButton.addEventListener('click',createListing);

  //innerVars
  let totalProfit = Number(0);




  function createListing(e){
    e.preventDefault();

    let makeFieldValue = makeField.value;
    let modelFieldValue = modelField.value;
    let yearFieldValue = yearField.value;
    let fuelFieldValue = fuelField.value;
    let originalCostFieldValue = Number(originalCostField.value);
    let sellingPriceFieldValue = Number(sellingPriceField.value);

    if(!makeFieldValue || !modelFieldValue || !yearFieldValue || !fuelFieldValue || !originalCostFieldValue || !sellingPriceFieldValue || originalCostFieldValue > sellingPriceFieldValue){
      return;
    }

    else{
      let newTr = document.createElement('tr');
      newTr.classList.add("row");

      let makeTd = document.createElement('td');
      makeTd.textContent = makeFieldValue;

      newTr.appendChild(makeTd);

      let modelTd = document.createElement('td');
      modelTd.textContent = modelFieldValue;

      newTr.appendChild(modelTd);

      let yearTd = document.createElement('td');
      yearTd.textContent = yearFieldValue;

      newTr.appendChild(yearTd);

      let fuelTd = document.createElement('td');
      fuelTd.textContent = fuelFieldValue;

      newTr.appendChild(fuelTd);

      let originalCostTd = document.createElement('td');
      originalCostTd.textContent = originalCostFieldValue;

      newTr.appendChild(originalCostTd);

      let sellPriceTd = document.createElement('td');
      sellPriceTd.textContent = sellingPriceFieldValue;

      newTr.appendChild(sellPriceTd);

      let buttonsTd = document.createElement('td');

      let editButton = document.createElement('button');
      editButton.classList.add("action-btn");
      editButton.classList.add("edit");
      editButton.textContent = "Edit";

      editButton.addEventListener('click', edit);

      let sellButton = document.createElement('button');
      sellButton.classList.add("action-btn");
      sellButton.classList.add("sell");
      sellButton.textContent = "Sell";

      sellButton.addEventListener('click', sell);

      buttonsTd.appendChild(editButton);
      buttonsTd.appendChild(sellButton);

      newTr.appendChild(buttonsTd);

      publishedCarsTable.appendChild(newTr);

      makeField.value = "";
      modelField.value = "";
      yearField.value = "";
      fuelField.value= "";
      originalCostField.value = "";
      sellingPriceField.value = "";

      






    }


   
    function edit(e){

      let currentFields = e.target.parentElement.parentElement.getElementsByTagName("td");

      
      makeField.value = currentFields[0].textContent;
      modelField.value = currentFields[1].textContent;
      yearField.value= currentFields[2].textContent;
      fuelField.value = currentFields[3].textContent;
      originalCostField.value= currentFields[4].textContent;
      sellingPriceField.value = currentFields[5].textContent;

      e.target.parentElement.parentElement.remove();


    }

    function sell(e){

      let currentFields = e.target.parentElement.parentElement.getElementsByTagName("td");

      let currentProfitMade = 0;
      let originalPrice = currentFields[4].textContent;
      let sellingPrice = currentFields[5].textContent;

      currentProfitMade = Number(sellingPrice) - Number(originalPrice);
      totalProfit+= currentProfitMade;

      let newLi = document.createElement("li");
      newLi.classList.add("each-list");

      let modelMakeSpan = document.createElement("span");
      modelMakeSpan.textContent = `${currentFields[0].textContent} ${currentFields[1].textContent}`;

      newLi.appendChild(modelMakeSpan);

      let yearSpan= document.createElement("span");
      yearSpan.textContent = `${currentFields[2].textContent}`;

      newLi.appendChild(yearSpan);

      let profitSpan = document.createElement("span");
      profitSpan.textContent = currentProfitMade;

      newLi.appendChild(profitSpan);

      soldCarsTable.appendChild(newLi);

      let currentTotalProfitMade = totalProfitField.textContent;

      totalProfitField.textContent = (Number(currentProfitMade) + Number(currentTotalProfitMade)).toFixed(2);

      e.target.parentElement.parentElement.remove();



    }




  }


}
