// Função do menu
var menuoculto = true
function exibMenu (){
    var divContent = document.querySelector("div#content")
    var divFechaMenu = document.querySelector('div.fechamenu')
    var divFechaMenuComp = document.querySelector('div.fechamenu-complemento')
    if (menuoculto == true){
        divContent.style.display ="block"
        divFechaMenu.style.display ="block"
        divFechaMenuComp.style.display = "block"
        menuoculto = false
    }else {
        divContent.style.display ="none"
        divFechaMenu.style.display ="none"
        divFechaMenuComp.style.display = "none"
        menuoculto = true
    }
}
function closemenu (){
    document.querySelector("div#content").style.display ="none"
    document.querySelector('div.fechamenu').style.display ="none"
    document.querySelector("div#fechamenu-complemento").style.display = "none"
    menuoculto = true 
}
//Função da galeria
function visualizar(imgNome){
    document.querySelector("div#galeria").style.display="block"
    var foto = document.createElement("img")
    foto.setAttribute("class", "img")
    foto.setAttribute('src', imgNome)
    document.querySelector("figure#adimg").appendChild(foto)
    document.body.style.overflow="hidden"
    var largura = window.innerWidth;
    var altura = window.innerHeight;
    if(largura < 300 || altura<= 375){
        window.location.href=`${imgNome}`
    }    
}
function fechar (){
    document.body.style.overflow="visible"
    document.querySelector("div#galeria").style.display="none" 
}
