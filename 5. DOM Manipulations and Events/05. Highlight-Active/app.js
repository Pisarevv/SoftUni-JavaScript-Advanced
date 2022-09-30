function focused() {
    let takenElements = document.getElementsByTagName("input");
    for(let element of takenElements){
        element.addEventListener('focus', focus);
        element.addEventListener('blur', unfocus);
    
    }
    
    function focus(event){
        let currentElement = event.target.parentElement;
        currentElement.classList.add("focused");
    }

    function unfocus(event){
        let currentElement = event.target.parentElement;
        currentElement.classList.remove("focused");
    }
}