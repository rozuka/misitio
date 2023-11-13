function openPage(evt, Pagename) {
    var i, menu, contenido;
      
    contenido = document.getElementsByClassName("contenido");
    for (i = 0; i < contenido.length; i++) {
        contenido[i].style.display = "none";
    }
  
    menu = document.getElementsByClassName("menu");

    for (i = 0; i < menu.length; i++) {
      menu[i].className = menu[i].className.replace(" active", "");
    }
      
    document.getElementById(Pagename).style.display = "block";
    evt.currentTarget.className += " active";
    }
    document.getElementById("itab").click();



