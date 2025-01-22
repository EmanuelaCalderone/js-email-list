/* Descrizione
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre) */

//creo l'elemento di output
const emailList = document.getElementById('email-list');
/* console.log(emailList);*/

//creo variabile per l'endpoint
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

//creo la variabile per i singoli indirizzi email inizializzandola a stringa vuota
let emails = "";

//creo la variabile per il bottone
const button = document.getElementById('moreEmails');


function createEmails () {

//richiesta Ajax (asincrona) tramite Axios (libreria) verso l'API (servizio esterno) per ottenere 10 email
for (let i = 0; i < 10; i++) {
    
    axios.get(endpoint)
        .then(response => {
        
        // codice da eseguire in caso di successo
        const result = response.data;
        
        //creo la variabile che conterrà le email
        let address = result.response;
        //console.log(response);

        //aggiungo un 'li' ad ogni iterazione
        emails += `
        <li>${address}</li>
        `
        //console.log(emails);
                
        //aggancio l'output nell'html
        emailList.innerHTML = emails;

    })
        
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error);
    });

};
    return emails;
};

createEmails();

//aggiungo una funzione al click del bottone
button.addEventListener("click", function () {
    //svuoto l'elenco delle email
    emails = "";
    //genero di nuovo la funzione per crearle
    createEmails();  
  });


