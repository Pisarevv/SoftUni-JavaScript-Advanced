function validate() {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let inputEmail = document.getElementById("email");

    inputEmail.addEventListener('change', validateEmail);




    function validateEmail(){
        let inputValue = inputEmail.value;
        if(!inputValue.match(emailRegex)){
            inputEmail.classList.add("error");
        }
        else{
            inputEmail.classList.remove("error");
        }
    }
}