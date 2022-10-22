window.addEventListener("load", solve);

function solve() {
  
  // fields
  let firstNameField = document.getElementById("first-name");
  let lastNameField = document.getElementById("last-name");
  let ageField = document.getElementById("age");
  let storyTitleField = document.getElementById("story-title");
  let genreField = document.getElementById("genre");
  let storyField = document.getElementById("story");

  //sections
  let previewSection = document.getElementById("preview-list");
  let mainDiv = document.getElementById("main");

  //buttons 
  let publishButton = document.getElementById("form-btn");
  publishButton.addEventListener('click', publishStory);



  function publishStory(e){
    e.preventDefault();

    let firstNameValue = firstNameField.value;
    let lastNameValue = lastNameField.value;
    let ageValue = ageField.value;
    let storyTitleValue = storyTitleField.value;
    let genreValue = genreField.value;
    let storyValue = storyField.value;

    if(!firstNameValue || !lastNameValue || !ageValue || !storyTitleValue || !genreValue || !storyValue){
      return;
    }

    e.target.disabled = true;

    let newLi = document.createElement("li");
    newLi.className = "story-info";

    let newArticle = document.createElement("article");

    let newH4 = document.createElement("h4");
    newH4.textContent = `Name: ${firstNameValue} ${lastNameValue}`;
    newArticle.appendChild(newH4);

    let ageP = document.createElement("p");
    ageP.textContent = `Age: ${ageValue}`;
    newArticle.appendChild(ageP);

    let titleP = document.createElement("p");
    titleP.textContent = `Title: ${storyTitleValue}`;
    newArticle.appendChild(titleP);

    let genreP = document.createElement("p");
    genreP.textContent = `Genre: ${genreValue}`;
    newArticle.appendChild(genreP);

    let storyP = document.createElement("p");
    storyP.textContent = `${storyValue}`;
    newArticle.appendChild(storyP);

    newLi.appendChild(newArticle);

    let saveButton = document.createElement("button");
    saveButton.className = "save-btn";
    saveButton.textContent = "Save Story";
    saveButton.addEventListener('click', saveStory);
    newLi.appendChild(saveButton);

    let editButton = document.createElement("button");
    editButton.className = "edit-btn";
    editButton.textContent = "Edit Story";
    editButton.addEventListener('click', editStory);
    newLi.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete Story";
    deleteButton.addEventListener('click', deleteStory);
    newLi.appendChild(deleteButton);

    previewSection.appendChild(newLi);
    clearFields();

  };

  function clearFields(){
    firstNameField.value = "";
    lastNameField.value = "";
    ageField.value = "";
    storyTitleField.value = "";
    genreField.value = "";
    storyField.value = "";
  }


  function saveStory(e){
    let savedStoryH1Tag = document.createElement("h1");
    savedStoryH1Tag.textContent = "Your scary story is saved!";

    let mainDivChildren = Array.from(mainDiv.children);
    mainDivChildren.forEach(child => child.remove());

    mainDiv.appendChild(savedStoryH1Tag);

    
  };

  function editStory(e){
    let sectionFields = e.target.parentElement.children[0].children;

    let firstName =  sectionFields[0].textContent.split(" ")[1];
    let lastName =  sectionFields[0].textContent.split(" ")[2];

    firstNameField.value = firstName;
    lastNameField.value  = lastName;
    ageField.value  = sectionFields[1].textContent.replace("Age: ", "")
    storyTitleField.value = sectionFields[2].textContent.replace("Title: ","");
    genreField.value  = sectionFields[3].textContent.replace("Genre: ","");
    storyField.value  = sectionFields[4].textContent;

    publishButton.disabled = false;

    e.target.parentElement.remove();

  };

  function deleteStory(e){
    
    publishButton.disabled = false;

    e.target.parentElement.remove();

  };


  

}
