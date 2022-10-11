const mailList = [
    "utente@gmail.com",
    "paolorossi@gmail.com",
    "paperino@gmail.com",
    "info@sorgesana.it",
    "penna.bic@yahoo.it",
    "ilmionome@gmail.com",
    "carciofo.assonnato@yahoo.it"
];
// console.log(mailList);

const email = prompt("Inserisci la tua email");

if (mailList.includes(email)) {
    console.log("Email esistente");

    let diceComputer = Math.floor(Math.random() * 6 + 1);
    let diceUser = Math.floor(Math.random() * 6 + 1);
    console.log(diceComputer, diceUser);

    if (diceUser > diceComputer) {
        console.log("Hai vinto!!");
    } else if (diceUser < diceComputer) {
        console.log("Hai perso!!");
    } else {
        console.log("Pareggio!");
    }
} else {
    console.log("Email inesistente o errata");
}