function lockedProfile() {

    let userProfiles = document.getElementsByClassName("profile");
    let clickButtons = document.querySelectorAll(".profile button");
    for(let button of clickButtons){
        button.addEventListener("click", formatOutput);
    }


    function formatOutput(e){
        let profile = e.target.parentNode;
        let isHidden = profile.children[2].checked ? true : false;

        if(!isHidden){
            profile.children[9].style.display = "block";
            e.target.textContent = "Hide";
        }
        else{
            profile.children[9].style.display = "none";
            e.target.textContent = "Show more";
        }

    }
}