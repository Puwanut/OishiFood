var navbar = document.getElementById("myTopnav");
var items = (document.getElementById("navbar-items")).getElementsByTagName("span");
var window_size = window.matchMedia("(max-width: 992px)");
var banner = document.getElementsByClassName("banner")[0];
toggle_menuline(window_size);
window_size.addListener(toggle_menuline);

function toggle_menu() {
    if (navbar.className === "topnav") {
        navbar.className += " responsive";
        banner.style.marginTop = "-30px";
    } else {
        navbar.className = "topnav";
        banner.style.marginTop = "80px";
    }
}

function toggle_menuline(window_size) {
    if (window_size.matches) {
        setClassItems("")
        if (navbar.className === "topnav responsive")
            banner.style.marginTop = "-30px";
    }
    else {
        setClassItems("menu-line")
        banner.style.marginTop = "80px";
    }

}

function setClassItems(class_name) {
    for (let i = 0; i < items.length; i++) {
        items[i].className = class_name;
    };
}