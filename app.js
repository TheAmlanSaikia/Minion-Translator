var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");


// ---------------------Modify Url------------------------------

var mainUrl = "https://api.funtranslations.com/translate/minion.json";
    
function getTranslationURL(){
    return mainUrl +"?"+"text="+txtInput.value;
}


// -----------------------error function-----------------------------

function errorHandler(error){
    alert("There is a error, please try again", error);
}



  
// -----------------------------Calling api -------------------------


function clickEventListner(){
  
     fetch(getTranslationURL())
    .then (response => response.json())
    .then (json =>{ 
        var translatedText = json.contents.translated;  
        
        txtOutput.innerText = translatedText;
        }    )
     
  
        .catch(errorHandler)
    
}

btnTranslate.addEventListener("click",clickEventListner);







