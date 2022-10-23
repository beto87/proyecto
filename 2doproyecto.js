const contador = document.getElementById("contar");
const sumar = document.getElementById("incr");
const restar = document.getElementById("decr");
const reset = document.getElementById("reset");

var numero = 0;

sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;
    if(numero>=0){document.getElementById("contar").style.color = "blue";};
});
restar.addEventListener("click", ()=>{

    if(numero==-isFinite){}
    else{
        numero--;
        contador.innerHTML = numero;
        if(numero<=-1){document.getElementById("contar").style.color = "red";};
    }
});
reset.addEventListener("click", ()=>{
    numero = 0;
    contador.innerHTML = numero;
});


