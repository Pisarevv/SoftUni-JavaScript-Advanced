function extendProrotype(classToExtend) {
    classToExtend.prototype.species  = "Human";
    classToExtend.prototype.toSpeciesString = function() {
        return (`I am a ${this.species}. ${this.toString()}`);
    }
}


class Catto{
    class(name){
        this.name = name;
    }
}

extendProrotype(Catto);

let myCat = new Catto("Pesho");
console.log(myCat.toSpeciesString())