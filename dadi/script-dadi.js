const btnPlayer = document.getElementById("dado");
let risFinale = document.querySelector (`.risultato`);

btnPlayer.addEventListener(`click`,
function() {
    const dadoPlayer = Math.floor(Math.random() * 6) +1;
    console.log(dadoPlayer);
    const dadoPc = Math.floor(Math.random() * 6) +1;
    console.log(dadoPc);

    if (dadoPlayer > dadoPc ){
        console.log("win");
        risFinale.innerHTML = "Hai Vinto"

    } else if (dadoPlayer === dadoPc ){
        console.log("draw");
        risFinale.innerHTML = "Hai Pareggiato"

    }
    else {
        console.log("lose");
        risFinale.innerHTML = "Hai Perso"
    }
        

    


}

)