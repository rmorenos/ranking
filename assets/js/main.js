let elementlist = document.querySelectorAll(".far");
/*var i = -1;*/
elementlist.forEach( function(element, i){
    /*  i++; */
    element.addEventListener('click',function(){
        var j = i;
         alert(" No prodrá bajar la nota, una vez realizada");
        var posicion = parseInt(element.innerHTML);
        console.log(posicion);
       for(;posicion>0;posicion--){
           elementlist[j].style.background='#CCCCCC';
           j--;
       }

       /* elementlist[j-posicion].style.background='#CCCCCC';
            /* element.getElementsByClassName(".far"); */
            /*element.style.background='#CCCCCC';*/
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
