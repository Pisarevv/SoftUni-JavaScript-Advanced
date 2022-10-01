function attachEventsListeners() {

    let convertButtons = Array.from(document.querySelectorAll("input[type=button]"));
    let outputFields = Array.from(document.querySelectorAll("input[type=text]"));
    let outputValues = [];
    for(let button of convertButtons){
        button.addEventListener('click', convertTime);
    }

    function convertTime(e){
        let currentButton = e.target.id;
        
        switch(currentButton){
            case"daysBtn":{
                let seconds = Number(document.getElementById("days").value);
                outputValues = calculateOutput(seconds*86400);
                break;
            }
            case"hoursBtn":{
                let seconds = Number(document.getElementById("hours").value);
                outputValues = calculateOutput(seconds*3600);
                break;
            }
            case"minutesBtn":{
                let seconds = Number(document.getElementById("minutes").value);
                outputValues = calculateOutput(seconds*60);
                break;
            }
            case"secondsBtn":{
                let seconds = Number(document.getElementById("seconds").value);
                outputValues = calculateOutput(seconds);
                break;
            }     
        }

        setOutputValues(outputValues);

        function calculateOutput(value){
            let days = value / 86400;
            let hours = value / 3600;
            let minutes = value / 60;
            let seconds = value;

            return [days,hours,minutes,seconds];
        }

        function setOutputValues (inputArray){
           outputFields.find(x => x.id == "days").value = inputArray[0];
           outputFields.find(x => x.id == "hours").value = inputArray[1];
           outputFields.find(x => x.id == "minutes").value = inputArray[2];
           outputFields.find(x => x.id == "seconds").value = inputArray[3];
        }
        

    }
}