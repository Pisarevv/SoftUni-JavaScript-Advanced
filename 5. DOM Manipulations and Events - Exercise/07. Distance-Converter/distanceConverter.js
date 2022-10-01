function attachEventsListeners() {
    let convertButton = document.getElementById("convert");
    
    convertButton.addEventListener('click', convert);


    function convert() {
        let inputValue = Number(document.getElementById("inputDistance").value);
        let inputUnit = document.getElementById("inputUnits").value;
        console.log(inputUnit);
        let inputUnitInMM = convertInputValueToMM();

        let outputUnit = document.getElementById("outputUnits").value;
        let outputInDesiredUnit = convertMMtoDesiredUnit();

        let outputLocation = document.getElementById("outputDistance");
        outputLocation.value = outputInDesiredUnit;



        
        function convertInputValueToMM(){
            switch(inputUnit){
                case"km":{
                    return inputValue*1000000;
                }
                case"m":{
                    return inputValue*1000;
                }
                case"cm":{
                    return inputValue*10;
                }
                case"mm":{
                    return inputValue;
                }
                case"mi":{
                    return inputValue * 1609344;
                }
                case"yrd":{
                    return inputValue * 914.4;
                }
                case"ft":{
                    return inputValue  * 304.8;
                }
                case"in":{
                    return inputValue * 25.4 ;
                }
            }

        }

        function convertMMtoDesiredUnit() {
            switch(outputUnit){
                case"km":{
                    return inputUnitInMM/1000000;
                }
                case"m":{
                    return inputUnitInMM/1000;
                }
                case"cm":{
                    return inputUnitInMM/10;
                }
                case"mm":{
                    return inputUnitInMM;
                }
                case"mi":{
                    return inputUnitInMM/1609344;
                }
                case"yrd":{
                    return inputUnitInMM/914.4;
                }
                case"ft":{
                    return inputUnitInMM/304.8;
                }
                case"in":{
                    return inputUnitInMM/25.4 ;
                }
            }

        }

    }
}