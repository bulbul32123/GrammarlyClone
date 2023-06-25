const charVal = document.getElementById("textarea");

let totalCount = document.getElementById("total-counter")

let remainingCounter = document.getElementById("remaining-counter")

let char = 0;

const udpateCounter = () => {

    userchar = charVal.value.length; // Text area's value will count

    totalCount.innerText = userchar; // Count the text's value

    remainingCounter.innerText = 500 - userchar// when anyone write anythings in the text area for each text subtract the text limites like "a" - 150 = 149     
    
}

charVal.addEventListener("keyup", () => udpateCounter())


// Copy The Text code
const CopyText = ()=>{
    charVal.select(); // <= it Select the text 
    charVal.setSelectionRange(0,9999); // For Mobile
    navigator.clipboard.writeText(charVal.value); // Important Code
    

}