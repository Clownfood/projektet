function toggle(){
    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("black").classList.toggle('active')
}

document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        sidebar.classList.toggle('active')
        black.classList.toggle('active')
    }
})

