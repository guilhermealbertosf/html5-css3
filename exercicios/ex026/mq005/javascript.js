menu_state = false
function barrinha(){
    /*
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