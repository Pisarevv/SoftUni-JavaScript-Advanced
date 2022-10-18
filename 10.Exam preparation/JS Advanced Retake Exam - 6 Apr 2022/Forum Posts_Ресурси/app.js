window.addEventListener("load", solve);

function solve() {

  //fields 
  let titleField = document.getElementById("post-title");
  let categoryField = document.getElementById("post-category");
  let contentField = document.getElementById("post-content");

  let reviewsList = document.getElementById("review-list");

  let publishedList = document.getElementById("published-list");

  //buttons
  let publishButton = document.getElementById("publish-btn");
  publishButton.addEventListener('click', addPost);

  let clearButton = document.getElementById("clear-btn");
  clearButton.addEventListener('click', clearUploadedPosts);


  function addPost(e){
    e.preventDefault();

    let titleInput = titleField.value;
    let categoryInput = categoryField.value;
    let contentInput = contentField.value;

    if(!titleInput || !categoryInput || !contentInput){
      return;
    }

    let newLi = document.createElement("li");
    newLi.classList.add("rpost");

    let newArticle = document.createElement("article");

    let newh4 = document.createElement("h4");
    newh4.textContent = titleInput;
    newArticle.appendChild(newh4);

    let categoryP = document.createElement("p");
    categoryP.textContent = `Category: ${categoryInput}`;
    newArticle.appendChild(categoryP);

    let contentP = document.createElement("p");
    contentP.textContent = `Content: ${contentInput}`;
    newArticle.appendChild(contentP);

    newLi.appendChild(newArticle);
 

    let approveButton = document.createElement("button");
    approveButton.addEventListener('click', approvePost);
    approveButton.textContent = "Approve";
    approveButton.className = "action-btn approve"
    newLi.appendChild(approveButton);

    let editButton = document.createElement("button");
    editButton.addEventListener('click', editPost);
    editButton.textContent = "Edit";
    editButton.className = "action-btn edit"
    newLi.appendChild(editButton);

    reviewsList.appendChild(newLi);

    titleField.value = "";
    categoryField.value = "";
    contentField.value = "";

  };

  function editPost(e){
    let currentPostArticle = e.target.parentElement.children[0];
    titleField.value = currentPostArticle.children[0].textContent;
    categoryField.value = currentPostArticle.children[1].textContent.substring(10);
    contentField.value = currentPostArticle.children[2].textContent.substring(9);
    currentPostArticle.parentElement.remove();

  };

  function approvePost(e){
    let currentPost = e.target.parentElement;
    currentPost.className = "rpost";
    currentPost.children[1].remove();
    currentPost.children[1].remove();
    publishedList.appendChild(currentPost);
 
  };

  function clearUploadedPosts(e){
    let publishedPosts = Array.from(e.target.parentElement.getElementsByClassName("rpost"));

    for(let post of publishedPosts){
      post.remove();
    }
  }
}
