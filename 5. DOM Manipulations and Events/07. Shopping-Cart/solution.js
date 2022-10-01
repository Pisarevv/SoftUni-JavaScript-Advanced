function solve() {
   let addButtons = Array.from(document.getElementsByClassName("add-product"));
   let checkOutButton = document.getElementsByClassName("checkout")[0];
   let targetOutput = document.getElementsByTagName("textarea")[0];
   let boughtProducts = [];

   for(let button of addButtons){
      button.addEventListener('click', collectItems);
   }

   checkOutButton.addEventListener('click', checkoutProcedure)

   function collectItems(e){
      let currentDiv = e.target.parentElement.parentElement;
      let productName = currentDiv.children[1].children[0].textContent;
      let productPrice = Number(currentDiv.children[3].textContent);
      
      if(!boughtProducts.some(x => x.name == productName)){
         let productObject = {
            name : productName,
            price : Number(productPrice)
         }
         boughtProducts.push(productObject);

      }
      else{
         let currentObject = boughtProducts.find(x => x.name == productName);
         currentObject.price += productPrice;
         
      }

      targetOutput.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
      
   }

   function checkoutProcedure(){
      let totalBoughtProducts = [];
      let totalPrice = 0;
      boughtProducts.forEach(x => totalBoughtProducts.push(x.name));
      boughtProducts.forEach(x => totalPrice += x.price);
      targetOutput.value += `You bought ${totalBoughtProducts.join(", ")} for ${totalPrice.toFixed(2)}.`
   }
}