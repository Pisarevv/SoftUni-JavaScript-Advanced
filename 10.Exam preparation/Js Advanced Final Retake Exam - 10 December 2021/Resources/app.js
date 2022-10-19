window.addEventListener('load', solve);

function solve() {
    
    //fields
    let productTypeField = document.getElementById("type-product");
    let descriptionField = document.getElementById("description");
    let clientNameField = document.getElementById("client-name");
    let clientPhoneField = document.getElementById("client-phone");

    let recivedOrdersSection = document.getElementById("received-orders");

    let completedOrdersSection = document.getElementById("completed-orders");

    //buttons

    let sendButton = document.querySelectorAll("div#right button")[0];
    sendButton.addEventListener('click', sendForm);

    let clearButton = document.getElementsByClassName("clear-btn")[0];
    clearButton.addEventListener('click', clearCompletedSection);


    function sendForm(e){
        e.preventDefault();

        let productTypeValue = productTypeField.value;
        let descriptionValue = descriptionField.value;
        let clientNameValue = clientNameField.value;
        let clientPhoneValue = clientPhoneField.value;

        if(!productTypeValue || !descriptionValue || !clientNameValue || !clientPhoneValue){
            return;
        }

        let newDiv = document.createElement("div");
        newDiv.className = "container";

        let newh2 = document.createElement("h2");
        newh2.textContent = `Product type for repair: ${productTypeValue}`;
        newDiv.appendChild(newh2);

        let newh3 = document.createElement("h3");
        newh3.textContent = `Client information: ${clientNameValue}, ${clientPhoneValue}`;
        newDiv.appendChild(newh3);

        let newh4 = document.createElement("h4");
        newh4.textContent = `Description of the problem: ${descriptionValue}`;
        newDiv.appendChild(newh4);

        let startButton = document.createElement("button");
        startButton.className = "start-btn";
        startButton.textContent = "Start repair";
        startButton.addEventListener('click', startRepair);
        newDiv.appendChild(startButton);


        let finishButton = document.createElement("button");
        finishButton.className = "finish-btn";
        finishButton.textContent = "Finish repair";
        finishButton.disabled = true;
        finishButton.addEventListener('click', finishRepair);
        newDiv.appendChild(finishButton);

        recivedOrdersSection.appendChild(newDiv);

        productTypeField.value = ""; 
        descriptionField.value = "";
        clientNameField.value = ""; 
        clientPhoneField.value = ""; 


    };


    function startRepair(e){
        e.target.disabled = true;
        e.target.parentElement.getElementsByClassName("finish-btn")[0].disabled = false;
    };


    function finishRepair(e){
        let currentContainer = e.target.parentElement;
        let buttons = Array.from(currentContainer.querySelectorAll("button"));
        buttons.forEach(button => button.remove());
        completedOrdersSection.appendChild(currentContainer);
    
    };

    function clearCompletedSection(e){
        let ordersToRemove = Array.from(e.target.parentElement.querySelectorAll(".container"));
        ordersToRemove.forEach(order => order.remove());
    }


}