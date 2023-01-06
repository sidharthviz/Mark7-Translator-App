var btnTranslate = document.querySelector("#btn-translate");
var text = document.querySelector("#text");
var outputDev = document.querySelector("#output");

var ServerUrl = "https://api.funtranslations.com/translate/pirate.json/"


function getTranslate(text){

    return ServerUrl + "?" + "text=" + text
}

function getError(error){
    console.log("There's a Error! Please check", error);
    alert("Please Wait!, The server might be down!")
}

function clickHandler(){
    var getText = text.value;

    fetch(getTranslate(getText))
        .then(response => response.json())
        .then( json => {
            var Translation = json.contents.translated;
            outputDev.innerText = Translation
        })
        .catch(getError);
    }

btnTranslate.addEventListener("click", clickHandler);