class Garden {
	constructor(spaceAvailable){
		this.spaceAvailable = Number(spaceAvailable);
		this.plants = [];
		this.storage = [];
	};

	addPlant(plantName,spaceRequired){
		if(spaceRequired > this.spaceAvailable){
			throw new Error("Not enough space in the garden.");
		}

		let newPlant = {
			plantName,
			spaceRequired:Number(spaceRequired),
			ripe:false,
			quantity:Number(0)
		}

		this.plants.push(newPlant);
		this.spaceAvailable -= spaceRequired;
		return `The ${plantName} has been successfully planted in the garden.`

	};

	ripenPlant(plantName,quantity){
		if(!this.plants.some(x => x.plantName == plantName)){
			throw new Error(`There is no ${plantName} in the garden.`);
		}

		let currentPlant = this.plants.find(x=> x.plantName === plantName);

		if(currentPlant.ripe == true){
			throw new Error(`The ${plantName} is already ripe.`);
		}

		if(quantity <= 0){
			throw new Error("The quantity cannot be zero or negative.");
		}

		currentPlant.ripe = true;
		currentPlant.quantity += quantity;

		let output = '';
		quantity > 1 ? output=`${quantity} ${plantName}s have successfully ripened.` : output = `${quantity} ${plantName} has successfully ripened.`

		return output;		
		
	};

	harvestPlant(plantName){
		if(!this.plants.some(x => x.plantName == plantName)){
			throw new Error(`There is no ${plantName} in the garden.`);
		}

		let currentPlant = this.plants.find(x=> x.plantName === plantName)

		if(currentPlant.ripe == false){
			throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
		}

		this.spaceAvailable += currentPlant.spaceRequired;
		delete currentPlant.ripe;
		delete currentPlant.spaceRequired;
		this.storage.push(currentPlant);
		this.plants = this.plants.filter(x => x.plantName !== plantName);

		return `The ${plantName} has been successfully harvested.`

	};


	generateReport(){
		let buffer = "";

		buffer +=`The garden has ${this.spaceAvailable} free space left.\n`;
		buffer += "Plants in the garden: ";

		this.plants.sort((a,b) => (a.plantName.localeCompare(b.plantName))).forEach(plant => buffer += `${plant.plantName}, `);
		buffer = buffer.substring(0,buffer.length-2);
		buffer += `\n`;

		buffer+="Plants in storage: "
		if(this.storage.length == 0){
			buffer+= "The storage is empty."
		}

		else{
			this.storage.forEach(plant => buffer+=`${plant.plantName} (${plant.quantity}), `);

			buffer = buffer.substring(0,buffer.length-2);
		}

		return buffer.trimEnd();

	}
}



const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
