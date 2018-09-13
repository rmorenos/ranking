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
