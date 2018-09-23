let elementlist = document.querySelectorAll(".far");
elementlist.forEach(function(element){
    element.addEventListener('click',function(ev){
        alert(" clikeada");
         element.getElementsByClassName("far");
         element.style.background='#CCCCCC';
    })


});
let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");
closes.forEach(function (close) {
    close.addEventListener('click', function (ev) {
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("fadeInRight");
        content.classList.add("animated");
        content.classList.add("fadeOutRight");
        setTimeout(() => {
            location.href="../";
        } , 500);
    });
    
})
