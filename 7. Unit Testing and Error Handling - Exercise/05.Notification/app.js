function notify(message) {
  
  let notificationDiv = document.getElementById("notification");
  
  notificationDiv.textContent = message;
  notificationDiv.style.display = "block";

  notificationDiv.addEventListener('click', hideNotiifcation);


  function hideNotiifcation(e){
    e.target.style.display = "none";

  }
}