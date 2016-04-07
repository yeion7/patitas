document.addEventListener("DOMContentLoaded", function(){
    var menu = document.getElementById('toggle');
    var items = document.querySelector(".nav-items");

    menu.addEventListener("click", function (evt){
        evt.preventDefault();
        items.classList.toggle("hidden")
    })

});