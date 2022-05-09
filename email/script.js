const inputEmail = document.querySelector("input");
console.log(inputEmail);
const myButton = document.querySelector("button");
console.log(myButton); 
const myOutput = document.querySelector(".access"); 



// lista email di chi puo accedere
const emailPass =["giociotta@gmail.com", "ciao@hello.it", "liberato@libero.it", "vivagesu@hotmail.it"];


// Chiedo all’utente la sua email

// controllo che sia nella lista di chi può accedere


myButton.addEventListener("click",
    function(){
        let emailUser = inputEmail.value;

        for (let i = 0; i < emailPass.length; i++ ) {
            console.log(emailPass [i]);

            if (emailUser == emailPass[i]){
                myOutput.innerHTML = "Prego, accedi pure."
            }
            else{
                myOutput.innerHTML = "non pui entrare" 
            }
        }
        
       
       
       
       
        

    }

)



// stampa un messaggio  sull’esito del controllo.