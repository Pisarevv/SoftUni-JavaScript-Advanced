function focused() {
    let takenElement = document.querySelector("h1");
    takenElement.addEventListener('mousemove', focus);
    takenElement.addEventListener('mouseout', unfocus);

    function focus(event){
        let currentElement = event.target;
        currentElement.classList.add("focused");
    }
}