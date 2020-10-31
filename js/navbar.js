var navbar = document.getElementById("myTopnav");
var window_size = window.matchMedia("(max-width: 992px)");
var banner = document.getElementsByClassName("banner")[0];
change_banner_margintop(window_size);
window_size.addListener(change_banner_margintop);

function toggle_menu() {
    if (navbar.className === "topnav") {
        navbar.className += " show";
        banner.style.marginTop = "-30px";
    } else {
        navbar.className = "topnav";
        banner.style.marginTop = "80px";
    }
}

function change_banner_margintop(window_size){
    if (window_size.matches && navbar.className === "topnav show") {
        banner.style.marginTop = "-30px";
    }
    else
        banner.style.marginTop = "80px";
}