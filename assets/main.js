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
console.log(timerEl);

const randomEl = document.querySelector("#random_list");

const pc_number = [];

for (let i = 0; i < 5; i++) {
  const numero_casuale = Math.floor(Math.random() * 100) + 1;
  pc_number.push(numero_casuale);
  //CREO 5 NUMERI E GLI METTO DENTRO L'ARRAY
}
console.log(pc_number);
