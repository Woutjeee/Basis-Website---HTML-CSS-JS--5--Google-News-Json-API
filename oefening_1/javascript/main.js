var url = 'http://newsapi.org/v2/top-headlines?' + 'country=nl&' + 'apiKey=fa5b78cebdd448c0a3bd4e9e1bc18371';
var req = new Request(url);
var numOfArticles = 0;



function convertToJson(response){
    return response.json();
}

function proccesData(data){
    console.log(data.articles[0]);
    document.querySelector("#article-1-header").innerHTML = data.articles[0].title;
}

function articles(data){
    for(var i = 0; i < data.articles.length; i++){
        numOfArticles++;
    }
    document.querySelector("#howManyArticles").innerHTML = numOfArticles - 1;
    console.log(numOfArticles);
}


function proccesArticle(){
    var numInput = document.querySelector("#numInputField").value;

    if(numInput > numOfArticles){
        alert("Dit artikel bestaat niet");
    } else {
        fetch(req)
            .then(convertToJson)
            .then(function (data) {
                document.querySelector("#date").innerHTML = data.articles[numInput].publishedAt;
                document.querySelector("#article-1-header").innerHTML = data.articles[numInput].title;           
                document.querySelector("#author").innerHTML = data.articles[numInput].author;
                document.querySelector("#article-1-description").innerHTML = "Description : " + data.articles[numInput].description;
                document.querySelector("#article-1-content").innerHTML = data.articles[numInput].content;
                document.querySelector("#url").innerHTML = data.articles[numInput].url;
            })
    }
}

fetch(req)
    .then(convertToJson)
    .then(articles)