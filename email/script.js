const inputEmail = document.querySelector("input");
console.log(inputEmail);
const myButton = document.querySelector("button");
console.log(myButton); 
const myOutput = document.querySelector(".access"); 


// lista email di chi puo accedere
const emailPass =["giociotta@gmail.com", "ciao@hello.it", "liberato@libero.it", "vivagesu@hotmail.it"];


// Chiedo all’utente la sua email
let emailUser = inputEmail.value;

// controllo che sia nella lista di chi può accedere
myButton.addEventListener("click",
    function(){
        // myOutput.append(emailPass [emailUser]);

        if (emailUser !== emailPass){
            myOutput.innerHTML = "non pui entrare"
        }
        else{
            myOutput.innerHTML = "Prego, accedi pure."
        }

    }

)



// stampa un messaggio  sull’esito del controllo.