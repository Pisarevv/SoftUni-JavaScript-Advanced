function validate() {

    //taken elements
    let inputUsernameElement = document.getElementById("username");
    let inputEmailElement = document.getElementById("email");
    let inputPasswordElement = document.getElementById("password");
    let confirmPasswordElement = document.getElementById("confirm-password");
    let isCompanyLabel = document.getElementById("company");
    let companyFieldSet = document.getElementById("companyInfo");
    let companyNumber = document.getElementById("companyNumber");
    let submitButton = document.getElementById("submit");
    let validElement = document.getElementById("valid");

    isCompanyLabel.addEventListener('change',showCompanyField);
    submitButton.addEventListener('click', checkFields)

    function showCompanyField(e){
        e.preventDefault();
        if(e.target.checked){
            companyFieldSet.style.display = "block";
        }
        if(!e.target.checked){
            companyFieldSet.style.display = "none";
        }
    }

    function checkFields(e){
        e.preventDefault();
        let isUsernameValid = checkUserName(inputUsernameElement.value);
        isUsernameValid != true ? inputUsernameElement.style.borderColor  = "red" : inputUsernameElement.style.borderColor   = ""; 

        let isEmailValid = checkEmail(inputEmailElement.value);
        isEmailValid != true ? inputEmailElement.style.borderColor  = "red" : inputEmailElement.style.borderColor   = ""; 


        let isPasswordValid = checkPassword(inputPasswordElement.value);
        let isPasswordConfirmvalid = checkPassword(confirmPasswordElement.value);
        let arePasswordSame = checkIfPasswordsMatch(confirmPasswordElement.value,inputPasswordElement.value);

        if(isPasswordValid == true && isPasswordConfirmvalid == true && arePasswordSame == true){
            inputPasswordElement.style.borderColor   = "";
            confirmPasswordElement.style.borderColor   = "";
        }
        else{
            inputPasswordElement.style.borderColor  = "red";
            confirmPasswordElement.style.borderColor  = "red";
        }
  /*
        isPasswordValid != true ? inputPasswordElement.style.borderColor  = "red" : inputPasswordElement.style.borderColor   = "";
        isPasswordConfirmvalid != true ? confirmPasswordElement.style.borderColor  = "red" : ;
        
       
        arePasswordSame != true ? inputPasswordElement.style.borderColor  = "red" : inputPasswordElement.style.borderColor   = ""; 
        arePasswordSame != true ? confirmPasswordElement.style.borderColor  = "red" : confirmPasswordElement.style.borderColor   = ""; 
*/
        if(isCompanyLabel.checked){
            let isCompanyInfoValid = checkCompanyInfo(companyNumber.value);
            isCompanyInfoValid != true ? companyNumber.style.borderColor  = "red" : companyNumber.style.borderColor   = ""; 
            if(isUsernameValid == true && isEmailValid == true && isPasswordValid == true && arePasswordSame == true && isCompanyInfoValid == true){
                validElement.style = "display: block"
            }
            else{
                validElement.style = "display: none"
            }
            
        }
        else{
            if(isUsernameValid == true && isEmailValid == true && isPasswordValid == true && arePasswordSame == true){
                validElement.style = "display: block"
            }
            else{
                validElement.style = "display: none"
            }
        }

        
    }



    function checkUserName(inputUsername){
        let isValid = true;
        let letterOrDigitRexeg = /^[A-Za-z0-9]*$/g;
        if(inputUsername.length < 3 || inputUsername.length > 20){
            return isValid = false;
        }
        for(let ch of inputUsername){
            if(!ch.match(letterOrDigitRexeg)){
               return isValid = false;
                
            }
        }
        return isValid;
    
    }
    
    function checkPassword(inputPassword){
        let isValid = true;
        let letterOrDigitRexeg = /^[\w]$/g;
        if(inputPassword.length < 5 || inputPassword.length > 15){
           return isValid = false;
        }
        for(let ch of inputPassword){
            if(!ch.match(letterOrDigitRexeg)){
               return isValid = false;
               
            }
        }
        return isValid;
    
    }
    
    
    function checkIfPasswordsMatch(firstInputPass,secondInputPass){
        return firstInputPass === secondInputPass ? true : false;
    }
    
    function checkEmail(inputEmail){
        let checkRegex = /^[^@.]+@[^@]*\.[^@]*$/g;
        return inputEmail.match(checkRegex) ? true : false;
    }
    
    function checkCompanyInfo(inputInfo){
        let checkForNumbersOnly = /^[0-9]*$/g;
        let isValid = true;
        if(!inputInfo.match(checkForNumbersOnly)){
            return isValid=false;
        }
        if(inputInfo.length != 4 ){
            return isValid= false;
        }
    
        return isValid;
    }
    
    

}




