function attachGradientEvents() {
    let element = document.getElementById("gradient");
    element.addEventListener('mousemove', calculateGradient);
    element.addEventListener('mouseout', mouseOut);




    function calculateGradient(e) {
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";


    }

    function mouseOut(){
        document.getElementById('result').textContent = "";

    }
        
    
}