
window.onload = function(){
    var header = document.getElementById("header");
    var contenido_header = header.innerHTML;
    
    console.log(contenido_header);
    var i = 0;
    header.parentNode.removeChild(header);
    var contenedor = document.getElementById("contenedor");

    
    
    
    window.onscroll = function() {
        var y = window.scrollY;
        
        if(y > 500){
            document.getElementById("pg2_text").style.transform = "translate(0px,0px)"; 
            document.getElementById("pg2_text").style.opacity ="1";
            document.getElementById("img_cereza").style.transform ="scale(1)";

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
            document.getElementById("pg2_text").style.opacity ="0";
            document.getElementById("pg2_text").style.transform = "translate(-500px,0px)";
            document.getElementById("img_cereza").style.transform ="scale(0)";
            
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

