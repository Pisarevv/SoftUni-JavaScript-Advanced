function calculateVolumeAndArea(area, vol, input){

    let inputArr = JSON.parse(input);
    let resultObjects = [];

    for(let currInp of inputArr){
        let calculatedArea = area.call(currInp);
        let calculatedvolume = vol.call(currInp);
        let newObject = {
            area:calculatedArea,
            volume:calculatedvolume
        }
        resultObjects.push(newObject);


    }

    return resultObjects;
}

    
area = function area () {
    return Math.abs(this.x * this.y)
};

vol = function vol() {
    return Math.abs(this.x * this.y * this.z)
};


console.log(calculateVolumeAndArea(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    ));