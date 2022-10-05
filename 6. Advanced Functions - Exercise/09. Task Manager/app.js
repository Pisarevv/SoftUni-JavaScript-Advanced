function solve() {

    let addTaskSection = document.getElementsByTagName('section')[0];
    let openSection = document.getElementsByTagName('section')[1];
    let inprogressSection = document.getElementsByTagName('section')[2];
    let completeSection = document.getElementsByTagName('section')[3];

    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let dueDate = document.getElementById('date');
    let btnAdd = document.getElementById('add');

    function createElement(type,text,className) {
        let result = document.createElement(type);

        result.textContent = text;

        if(className){
            result.classList.add(className);
        }

        return result;

    }

    btnAdd.addEventListener('click', () => {
        event.preventDefault();
        let inputTaskName = document.getElementById("task").value
        let inputDescription = document.getElementById("description").value;
        let inputDate = document.getElementById("date").value;

        if(inputTaskName && inputDescription && inputDate){
            let newArticle = createElement('article');
            let newh3 = createElement('h3',inputTaskName);
            let newpFirst = createElement('p',`Description: ${inputDescription}`);
            let newpSecond = createElement('p',`Due Date: ${inputDate}`);
            let newDiv = createElement('div',"", "flex");
            let greenButton = createElement('button','Start','green');
            let redButton = createElement('button','Delete','red');
            newArticle.appendChild(newh3);
            newArticle.appendChild(newpFirst);         
            newArticle.appendChild(newpSecond);
            newDiv.appendChild(greenButton);
            newDiv.appendChild(redButton);
            newArticle.appendChild(newDiv);           
            openSection.children[1].appendChild(newArticle);


            redButton.addEventListener('click', (e) => {
                newArticle.remove();
            })

        }
    });


}




