let nav = document.getElementById("nav")
nav.style.transitionDuration = '1s'
function menu(){
    if (nav.style.display == 'block'){
        nav.style.display = 'none'
    }
    else{
        nav.style.display = 'block'
    }
}