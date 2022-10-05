function getArticleGenerator(articles) {
    let takenArticles = articles;
    let outputElement = document.getElementById("content");

    return () => {
        if(takenArticles.length == 0){
            return;
        }
        let currentArticle = takenArticles.shift();
        let newArticleElement = document.createElement("article");
        newArticleElement.textContent = currentArticle;
        outputElement.appendChild(newArticleElement);

    }
}
