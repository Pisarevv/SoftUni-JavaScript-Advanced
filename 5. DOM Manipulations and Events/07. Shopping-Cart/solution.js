function solve() {
   let addButtons = document.getElementsByClassName("add-product");
   let boughtProducts = [];
   for(let button of addButtons){
      button.addEventListener('click', collectItems);
   }




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
         let currentObject = boughtProducts.filter(x => x.name == productName);
         currentObject.price = currentObject.price + productPrice;
         console.log(currentObject.price)
         
      }
      
   }
}