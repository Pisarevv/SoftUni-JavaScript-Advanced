function toggle() {
    let buttonInformation = document.getElementsByClassName("button")[0];
    let hiddenText = document.getElementById("extra");
    if(hiddenText.style.display ==""){
        hiddenText.style.display = "none";
    }
    if(hiddenText.style.display === "none"){
        hiddenText.style.display = "block";
        buttonInformation.textContent = "Less";
    }
    else if(hiddenText.style.display === "block"){
        hiddenText.style.display = "none";
        buttonInformation.textContent = "More";
    }
    


}