const squareCountsSelect = document.querySelector("[name='squareCounts']")
const btnStart = document.querySelector("#btn-start");
const myContainer = document.querySelector(".my-container");

// non si mettono le parentesi alla funzione tra parentesi perche` 
// e` una funzione nominata
btnStart.addEventListener("click", onBtnClick)

// funzione per le azioni che avverranno al click del pulsante 
function onBtnClick() {
    // leggo il valore della select
    const squareCounts = parseInt(squareCountsSelect.value);

    console.log("valore scelto", squareCounts);

    
}