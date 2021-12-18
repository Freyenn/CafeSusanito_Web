
window.onload = function(){
    var header = document.getElementById("header");
    var contenido_header = header.innerHTML;
    var i = 0;
    header.parentNode.removeChild(header);
    var contenedor = document.getElementById("contenedor");

    
    
    
    window.onscroll = function() {
        var y = window.scrollY;
        if(y > 500){
            
            if(i ==0){
                var h = document.createElement("header");
                h.setAttribute("id","header")
                h.className = "primary-header flex";
                h.innerHTML = contenido_header;
                contenedor.appendChild(h);
                i = 1;
                document.getElementById("img-central").style.opacity ="0";
            }
            
        }
        else{
            if( header = document.getElementById("header")){
            header.parentNode.removeChild(header);
            i = 0;
            setTimeout(function(){
                document.getElementById("img-central").style.opacity ="1";
            },500);
            }
        }
      };
   
    setTimeout(function(){
        document.getElementById("img-central").style.opacity ="1";
    },500);
}

