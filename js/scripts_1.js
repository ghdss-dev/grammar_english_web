function searchGrammar() {

    const searchInput = document.getElementById("search-input").value.toLowerCase(); 
    const articles = document.querySelectorAll(".post"); 
    let hasResults = false; 

    articles.forEach(article => {

        const content = article.textContent.toLowerCase(); 

        if (content.includes(searchInput)) {

            article.style.display = "block"; 
            hasResults = true; 

        } else {

            article.style.display = "none"; 

        }
    }); 

    document.getElementById("no-results").style.display = hasResults ? "none" : "block"; 
    return false; 
}