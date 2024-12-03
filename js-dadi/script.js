// Creo un array con i numeri da 1 a 6
const numbers = [1, 2, 3, 4, 5, 6];

// Estraggo dall'array un numero randomico da 1 a 6 per il Giocatore 
const  playerNumber =  numbers[Math.floor(Math.random() * numbers.length)];
alert(`Il giocatore lancia un dado; è uscito il numero ${playerNumber}!`)

// Estraggo dall'array un numero randomico da 1 a 6 per il Computer
const cpuNumber = numbers[Math.floor(Math.random() * numbers.length)];
alert(`Il Computer lancia un dado; è uscito il numero ${cpuNumber}!`)

// Creo una variabile vuota dove salvare l'eventuale vincitore
let winner = "";

 //Se il numero del giocatore è maggiore del numero del computer allora attribuisco Giocatore alla flag winner
if(playerNumber > cpuNumber){
    winner = "Giocatore"
}

//Se il numero del computer è maggiore del numero del giocatore allora attribuisco Computer alla flag winner
else if (cpuNumber > playerNumber){
    winner = "Computer"
}
// Altrimenti attribuisco Pareggio alla flag winner nell'eventualità di numero uguale
else{
    winner = "Pareggio";
}

// Se winner è diverso da "Pareggio" allora dichiaro un vincitore
if(winner !== "Pareggio"){
    alert(`Ha vinto il ${winner}!`);
}
// Altrimenti dichiaro un parimerito.
else{
    alert(`C'è stato un pareggio!`);
}

