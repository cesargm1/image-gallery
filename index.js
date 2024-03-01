const articles = document.querySelectorAll(".full-image");

articles.forEach((article) => {
    article.addEventListener("click", function(event) {
        const fullImage = article.querySelector("img");
        const fullRoute = fullImage.getAttribute("src");
        fullImage.src = fullRoute;
    });
});


// mirar linea 4








