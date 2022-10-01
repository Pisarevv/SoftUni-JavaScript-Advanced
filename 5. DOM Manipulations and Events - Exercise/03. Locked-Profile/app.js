function lockedProfile() {

    let userProfiles = document.getElementsByClassName("profile");
    let clickButtons = document.querySelectorAll(".profile button");
    for(let button of clickButtons){
        button.addEventListener("click", formatOutput);
    }


    function formatOutput(e){
        let profile = e.target.parentNode;
        //let isHidden = profile.querySelectorAll('input[type="radio"]')[0].checked ? true : false;
       /* let isHidden;
        if (profile.children[2].checked){
            isHidden = isHidden;
        }
        else if (profile.children[4].checked){e
            isHidden = !isHidden;
        }      */ 
        

        if(profile.querySelectorAll('input[type="radio"]')[1].checked){

            console.log(profile.getElementsByTagName("div")[0].style.display);

            if(profile.getElementsByTagName("div")[0].style.display == ""){
            profile.getElementsByTagName("div")[0].style.display = "block";
            e.target.textContent = "Hide it";
            }
            else if(profile.getElementsByTagName("div")[0].style.display == "block")
            {
                profile.getElementsByTagName("div")[0].style.display = "";
                e.target.textContent = "Show more";
            }
        }
        

    }
}