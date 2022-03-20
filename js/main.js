document.addEventListener("DOMContentLoaded", function(evt) {

    // Hamburger menu (Handle website menu on small/medium displays)
    var hamburgerBtn = document.getElementsByClassName("hamburger")[0];
    var sidenav = document.getElementsByClassName("w3-sidenav")[0];

    hamburgerBtn.addEventListener("click", function(){
        if(hamburgerBtn.textContent == "menu"){
            hamburgerBtn.textContent = "close";
            sidenav.style.display = "block";

        } else {
            hamburgerBtn.textContent = "menu";
            sidenav.style.display = "none";
        }
    });

});
