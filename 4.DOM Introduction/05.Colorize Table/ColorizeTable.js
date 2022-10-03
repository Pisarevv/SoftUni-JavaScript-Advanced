function colorize() {
    let matched = document.querySelectorAll("table tr");
    for(let i = 0; i < matched.length; i++){
        if(i % 2 != 0){
            matched[i].style.backgroundColor = "Teal";
        }
    }
    
}