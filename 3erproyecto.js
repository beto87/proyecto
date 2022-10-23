const $showcolor = document.querySelector(".colores-din");

let color= ["black","orange","white","gray","blue","purple","indigo","pink","cyan","green"];

function btnChanger(){
    let random = Math.floor(Math.random()*color.length);
    console.log("Random Value: " + random);
     

    let z = document.getElementById("container").style.background = color[random];
    if (color[""]){
        console.log(msg[""])
    }
    $showcolor.innerHTML = color[random];
}


