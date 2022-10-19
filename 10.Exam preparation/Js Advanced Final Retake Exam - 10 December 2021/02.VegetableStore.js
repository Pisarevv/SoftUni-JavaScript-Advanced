class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    };

    loadingVegetables(vegetables) {
        let addedVegetables = [];
        for (let vegetableInfo of vegetables) {

            let currVegType = vegetableInfo.split(" ")[0];
            let quantity = Number(vegetableInfo.split(" ")[1]);
            let price = Number(vegetableInfo.split(" ")[2]);

            if (!this.availableProducts.some(x => x.type == currVegType)) {
                let product = {
                    type: currVegType,
                    quantity,
                    price
                };
                this.availableProducts.push(product);
                addedVegetables.push(product.type);
            }
            else {
                let currentProduct = this.availableProducts.find(x => x.type == currVegType);
                currentProduct.quantity += quantity;
                if (currentProduct.price < price) {
                    currentProduct.price = price;
                }

            }

        }
        return `Successfully added ${addedVegetables.join(", ")}`;
    };

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (let product of selectedProducts) {
            let type = product.split(" ")[0];
            let quantity = Number(product.split(" ")[1]);

            if (!this.availableProducts.some(x => x.type == type)) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            let currentProduct = this.availableProducts.find(x => x.type == type);

            if (quantity > currentProduct.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            totalPrice += currentProduct.price * quantity;
            currentProduct.quantity -= quantity;

        };

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`

    };

    rottingVegetable(type, quantity) {
            if (!this.availableProducts.some(x => x.type == type)) {
                throw new Error(`${type} is not available in the store.`);
            }

            let currentProduct = this.availableProducts.find(x => x.type == type);

            if (quantity > currentProduct.quantity) {
                currentProduct.quantity = 0;
                return `The entire quantity of the ${type} has been removed.`
            }

            currentProduct.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        };

    revision(){
        let buffer = "Available vegetables:\n";
        this.availableProducts.sort((a,b) => a.price - b.price);
        for(let product of this.availableProducts){

            buffer += `${product.type}-${product.quantity}-$${product.price}\n`

        }
        buffer += `The owner of the store is ${this.owner}, and the location is ${this.location}.`

        return buffer;
    }
    


};



let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


