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

//funzione per confrontare i due array
function confronto(array1, array2) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (array1[i] == array2[j]) {
        bingo.push(array2[j]);
      }
    }
  }
}

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
  let countdown = 5;

  const clock = setInterval(() => {
    if (countdown === 0) {
      clearInterval(clock);
      randomEl.innerHTML = "<h2>Ecco i numeri da ricordare:</h2>";
      timerEl.innerHTML = " Tempo finito!";
    } else {
      timerEl.innerHTML = countdown;
    }
    countdown--;

    const card_topEl = document.getElementById("top_card");
    card_topEl.classList.add("d-none");

    const user_inputEl = document.getElementById("user_input");
    user_inputEl.classList.remove("d-none");
  }, 5000);
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

//RACCOLGO I NUMERI SCELTI IN UN ARRAY CHE USERO' PER FARE UN CONFRONTO
//PER RACCOGLIERE I NUMERI MI AFFIDO AL CLICK DEL 2 BOTTONE

const bingo = [];
const numeri_scelti = [];
const risultatoEl = document.getElementById("risultato");

risultatoEl.addEventListener("click", function () {
  const scelta_1 = document.getElementById("scelta_1");
  const scelta_2 = document.getElementById("scelta_2");
  const scelta_3 = document.getElementById("scelta_3");
  const scelta_4 = document.getElementById("scelta_4");
  const scelta_5 = document.getElementById("scelta_5");

  numeri_scelti.push(scelta_1.value);
  numeri_scelti.push(scelta_2.value);
  numeri_scelti.push(scelta_3.value);
  numeri_scelti.push(scelta_4.value);
  numeri_scelti.push(scelta_5.value);

  console.log(numeri_scelti);

  confronto(pc_number, numeri_scelti);
  console.log(bingo);

  const esitoEl = document.getElementById("esito");

  if (bingo.length === 0) {
    esitoEl.innerHTML = "<h2>hai fallito</h2>";
  } else if (bingo.length === 1) {
    esitoEl.innerHTML = `<h2>Mi dispiace hai indovinato solo il numero ${bingo}</h2>`;
  } else if (bingo.length === 2) {
    esitoEl.innerHTML = `<h2>Sei riuscito a indovinare i numeri ${bingo}</h2>`;
  } else if (bingo.length === 3) {
    esitoEl.innerHTML = `<h2>Grande hai indovinato 3 numeri che sono, ${bingo}</h2>`;
  } else if (bingo.length === 4) {
    esitoEl.innerHTML = `<h2>Per poco! hai beccato i numeri ${bingo}, ben 4 su 5 ;-) </h2>`;
  } else {
    esitoEl.innerHTML = `<h2>Hai indovinato tutti i numeri, sei un pro quasi quanto Michela</h2>`;
  }
});
