const btnPlayer = document.getElementById("dado");

btnPlayer.addEventListener(`click`,
function() {
    const dadoPlayer = Math.floor(Math.random() * 6) +1;
    console.log(dadoPlayer);
    const dadoPc = Math.floor(Math.random() * 6) +1;
    console.log(dadoPc);
}

)