const pricePerKm = 0.21;
const minorsSale = 0.2;
const oldSale = 0.4;

const formName = document.getElementById("name");
const formKm = document.getElementById("nKm");
const formAge = document.getElementById("age");

function generaBiglietto(){
    let clientName = formName.value;
    let clientKm = formKm.value;
    let clientAge = formAge.value;
    let ticketCost = (clientKm * pricePerKm).toFixed(2);

    const Nome = document.getElementById("ticketName");
    const Tipologia = document.getElementById("ticketType");
    const Carrozza = document.getElementById("ticketCarr");
    const CPCode = document.getElementById("ticketCP");
    const Prezzo = document.getElementById("ticketPrice");

    document.getElementById("results").className = "d-block";

    Nome.innerHTML= clientName;

    switch(true){
        case clientAge<=18:
            ticketCost= (ticketCost-(ticketCost*0.2)).toFixed(2);
            Tipologia.innerHTML='Under 18';
            break;

        case clientAge>=65:
            ticketCost= (ticketCost-(ticketCost*0.4)).toFixed(2);
            Tipologia.innerHTML='Over 65';
            break;

        default:
            Tipologia.innerHTML='Standard';
    }

    Prezzo.innerHTML="€" + ticketCost;

    Carrozza.innerHTML=randomNumber(1, 24);
    CPCode.innerHTML=randomNumber(90000, 99999);

}

function annullaBiglietto(){
    formName.value = "";
    formKm.value = "";
    formAge.value = "";

    document.getElementById("results").className = "d-none";
}

function randomNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}