function iniciar(){
    var contador=0;
    var caraouCoroa = Math.floor(Math.random() * 2)

    var botao = document.querySelector("#iniciar")
    

    if(caraouCoroa==0){
        botao.classList.toggle("flipAnimation")
        /*alert(`Jogando...`)*/
        
        document.getElementById("resultado").innerText= "..."
        setTimeout(function(){ document.getElementById("resultado").innerText= "👑"; }, 500);
        var contador= contador + 1;
        var resultadoPartida = `👑`;

    }
    else{
        botao.classList.toggle("flipAnimation")
        /*alert(`Jogando...`)*/
        
        document.getElementById("resultado").innerText= "..."

        setTimeout(function(){ document.getElementById("resultado").innerText= "😀"; }, 500);
        
        var contador= contador + 1;
        
        var resultadoPartida = `😀`; 
    }
    setTimeout(function(){ botao.classList.remove("flipAnimation"); }, 500);
    var historico =  document.getElementById("historico").innerHTML += `<li>${resultadoPartida}</li>` ;

    
}