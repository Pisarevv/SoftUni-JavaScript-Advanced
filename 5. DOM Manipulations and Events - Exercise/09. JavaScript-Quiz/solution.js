function solve() {
    let collectedSections = Array.from(document.getElementsByTagName("section"));
    collectedSections.shift();
    let correctAnswers = ["onclick", "JSON.stringify()","A programming API for HTML and XML documents"];
    let correctlyAwnsered = 0;

    let i = 0;
    let k = 1;

    initalize();
    
    function initalize () {
    let answerOptions = document.getElementsByClassName("answer-wrap");
    letfOption = answerOptions[i];
    rightOption = answerOptions[k];

    letfOption.addEventListener('click', returnValueOfAnswer);
    rightOption.addEventListener('click', returnValueOfAnswer);

    function returnValueOfAnswer(e) {
      let correctAnswer = correctAnswers.shift();
      let selectedAnswer = e.target.textContent.toString();
      i+=2;
      k+=2;

      if(selectedAnswer == correctAnswer){
        correctlyAwnsered++;
      }

      hideCurrentClassAndShowNext();

      function hideCurrentClassAndShowNext(){
        let currentSection = e.target.parentNode.parentNode.parentNode.parentNode;
        let nextSection;
        if(collectedSections.length == 0){
          currentSection.classList.add("hidden");
          showResult();
          return;

        }
        if(collectedSections.length > 0){
          nextSection = collectedSections.shift();

        }
        currentSection.classList.add("hidden");

       
        nextSection.classList.remove("hidden");

        initalize();

        
      }

      }
    

    }

    function showResult(){
      let resultElement = document.querySelector("ul#results");
      let resultTag = document.querySelectorAll("h1")[1];
      resultElement.style.display = "block";
      if(correctlyAwnsered == 3){
        resultTag.textContent = "You are recognized as top JavaScript fan!"
      }
      else{
        resultTag.textContent = `You have ${correctlyAwnsered} right answers`;
      }


    }
    
    }
  
