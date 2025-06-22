
function barrinha(){
    /*menu_state = false
    let menu = document.getElementById("menu")
    if(menu_state == false){
        menu.style.display = "block"
        menu_state = true
    }
    else{
        menu.style.display = "none"
        menu_state = false
    }
    */
    
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'block'
    }
    
}

function mudouTamanho(){
    if(window.innerWidth >= 768){       
         menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
}