/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// TASK
//visualizzare 5 numeri random (potenzialmente con un bottone)
//creare 5 elementi html (un UL) per i numeri
//creare un bottone con cui attivare il tutto
//attivare un timer di 30 secondi che toglie i numeri
//allo scadere del timer appaiono 5 input per inserire i numeri
//creare un bottone per inviare il risultato

const timerEl = document.getElementById("timer");
const startEl = document.getElementById("start");
const randomEl = document.querySelector("#random_list");

const pc_number = [];

startEl.addEventListener("click", function () {
  for (let i = 0; i < 5; i++) {
    const numero_casuale = Math.floor(Math.random() * 100) + 1;
    pc_number.push(numero_casuale);
    //CREO 5 NUMERI E LI METTO DENTRO L'ARRAY

    //AGGIUNGO I 5 NUMERI ALL'HTML
    const li = document.createElement("li");
    li.innerText = numero_casuale;
    randomEl.appendChild(li);
  }
  console.log(pc_number);

  //creazione del timer
  let countdown = 4;
  console.log(countdown);

  timerEl.innerHTML = countdown;
  const clock = setInterval(() => {
    if (countdown === 0) {
      clearInterval(clock);
      console.log("fermare il countdown");
      randomEl.innerHTML = "<h2>Ecco i numeri da ricordare:</h2>";
      timerEl.innerHTML = " Tempo finito!";
    } else {
      timerEl.innerHTML = countdown;
      console.log("mostro il valore che scende");
    }
    countdown--;
  }, 400);
});

//CREO I NUMERI DA METTERE DENTRO OPTION NEL SELECT
//PER CREARE TUTTE LE OPTION USO UN CICLO FOR SIMILMENTE A QUANTO FATTO PRIMA PER CREARE I <li></li>

function numeri_option(select_element, min, max) {
  for (let i = min; i < max; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select_element.appendChild(option);
  }
}

//PORTO UN NODO RELATIVO A TUTTE LE OPTION SU JS
const user_option = document.querySelectorAll(".risposta");

//USO LA FUNZIONE PER CREARE IL NUMERO DI RISPOSTE CHE POI L'UTENTE DOVRA' DARE

user_option.forEach((select_element) => {
  numeri_option(select_element, 1, 100);
});

console.log(user_option);
