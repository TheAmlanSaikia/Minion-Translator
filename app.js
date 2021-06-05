var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
function clickEventListner(){
    console.log("clicked")
    console.log("Input=",txtInput.value);
    
    txtOutput.innerText = txtInput.value;
  
    
}

btnTranslate.addEventListener("click",clickEventListner);


var text1 = "I am Ironman";
var text2 = "I am Batman";
var text3 = "I am Shakitiman";



function urlAdder(text){

  
  return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"+"?"+"text="+text;
}

function doFetch(text){
  fetch(urlAdder(text))
  .then(response=>response.json())
  .then(json=>console.log(json))
}

doFetch(text1);
doFetch(text2);
doFetch(text3);




