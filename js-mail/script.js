

// Dichiaro l'array contenente la lista delle mail valide per l'accesso
const mailList = [
    "andrea@gmail.com",
    "michele@gmail.com",
    "lucia@gmail.com",
    "guglielmo@libero.it",
    "gianpiero@outlook.it",
    "christian@hotmail.com",
    "tamara@live.it"
];

// Chiedo all'utente di inserire la propria mail
const userMail = prompt("Inserisci la tua mail");
// Inizializzo una variabile flag a false
let isFound = false;

// Eseguo un ciclo che attraversa l'array da 0 fino alla sua lunghezza totale
for(let i = 0; i < mailList.length; i++){
    // Se durante il controllo la mail inserita dell'utente è identica ad una degli elementi dentro l'array,
    // assegno alla variabile flag il valore true
    if(userMail === mailList[i]){
        isFound = true;
    }

}
//Se dopo il ciclo la variabile flag è True (quindi è stata trovata una corrispondenza) restituisco esito positivo all'utente
if (isFound){
    alert("La tua mail è presente nella lista. Accesso autorizzato!")
    // Altrimenti do all'utente esito negativo
} else{
    alert("Mi dispiace, la tua mail non è presente nell'elenco. Accesso negato.")
}
