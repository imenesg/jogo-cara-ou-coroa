function iniciar(){
    var contador=0;
    var caraouCoroa = Math.floor(Math.random() * 2)

    if(caraouCoroa==0){
        alert(`Jogando...`)
        document.getElementById("resultado").innerText= "👑"
        var contador= contador + 1;
        var resultadoPartida = `👑`;
    }
    else{
        alert(`Jogando...`)
        document.getElementById("resultado").innerText= "..."
        document.getElementById("resultado").innerText= "😀"
        var contador= contador + 1;
        var resultadoPartida = `😀`;
    }
    var historico =  document.getElementById("historico").innerHTML += `<li>${resultadoPartida}</li>` ;

    
}