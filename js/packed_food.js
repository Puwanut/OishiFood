let tab = document.getElementsByClassName('tab');

function show_packedfood(value){
    setActive(value);
    set_packedfood_display(value);
}

function setActive(value){
    let items = document.getElementsByClassName("menu-option-item");
    for (let i=0; i<5; i++){
        items[i].classList.remove("active");
    }
    items[value].classList.add("active");
}

function set_packedfood_display(value){
    // do something
    let items = document.getElementsByClassName("tab");
    for (let i=0; i<5; i++){
        items[i].style.display = 'none';
    }
    items[value].style.display = 'flex';
}