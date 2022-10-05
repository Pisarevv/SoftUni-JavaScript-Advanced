function solve() {

    let inputTaskName = document.getElementById('task')
    let inputDescription = document.getElementById('description');
    let inputDate = document.getElementById('date');

    const sections = Array.from(document.querySelectorAll('section')).map(e => e.children[1]);
    let addTaskSection = sections[0];
    let openSection = sections[1];
    let inprogressSection = sections[2];
    let completeSection = sections[3];
    let btnAdd = document.getElementById('add');
    btnAdd.addEventListener('click', addTask);


    function addTask () {
        event.preventDefault();


        if(inputTaskName && inputDescription && inputDate){

            let newArticle = createElement('article');
            let newh3 = createElement('h3',inputTaskName.value);
            let newpFirst = createElement('p',`Description: ${inputDescription.value}`);
            let newpSecond = createElement('p',`Due Date: ${inputDate.value}`);
            let newDiv = createElement('div',"", "flex");
            let greenButton = createElement('button','Start','green');
            let redButton = createElement('button','Delete','red');
            let orangebutton = createElement('button','Finish','orange')

            newArticle.appendChild(newh3);
            newArticle.appendChild(newpFirst);         
            newArticle.appendChild(newpSecond);
            newDiv.appendChild(greenButton);
            newDiv.appendChild(redButton);
            newArticle.appendChild(newDiv);         

            openSection.appendChild(newArticle);

            inputTaskName.value = "";
            inputDescription.value= "";
            inputDate.value = "";


            redButton.addEventListener('click', deleteArticle);
            greenButton.addEventListener('click', moveArticleToInProgress);
            orangebutton.addEventListener('click', moveArticleToFinish);




            function deleteArticle() {
                newArticle.remove();
            }
    
            function moveArticleToInProgress() {
                greenButton.remove();
                newDiv.appendChild(orangebutton);
                inprogressSection.appendChild(newArticle);
            }

            function moveArticleToFinish(){
                newDiv.remove();
                completeSection.appendChild(newArticle);
            }
  
        }

        
    };



    function createElement(type,text,className) {
        let result = document.createElement(type);

        result.textContent = text;

        if(className){
           result.className = className;
        }

        return result;

    }

}






