var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
function clickEventListner(){
    console.log("clicked")
    console.log("Input=",txtInput.value);
    
    txtOutput.innerText = txtInput.value;
  
    
}

btnTranslate.addEventListener("click",clickEventListner);
