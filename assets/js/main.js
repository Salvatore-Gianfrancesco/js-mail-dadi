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

const submit = document.querySelector("button");
submit.addEventListener("click",
    function () {
        const email = document.querySelector("input").value;

        let found = false;

        for (let i = 0; i < mailList.length; i++) {
            if (mailList[i] === email) {
                found = true;
            }
        }

        if (found) {
            // console.log("Email esistente");

            let diceComputer = Math.floor(Math.random() * 6 + 1);
            let diceUser = Math.floor(Math.random() * 6 + 1);
            // console.log(diceComputer, diceUser);
            document.getElementById("dice_computer").innerHTML = diceComputer;
            document.getElementById("dice_user").innerHTML = diceUser;

            if (diceUser > diceComputer) {
                // console.log("Hai vinto!!");
                document.getElementById("game_result").innerHTML = "Hai vinto!!";
            } else if (diceUser < diceComputer) {
                // console.log("Hai perso!!");
                document.getElementById("game_result").innerHTML = "Hai perso!!";
            } else {
                // console.log("Pareggio!");
                document.getElementById("game_result").innerHTML = "Pareggio!";
            }
        } else {
            // console.log("Email inesistente o errata");
            alert("Email inesistente o errata");
        }
    }
);