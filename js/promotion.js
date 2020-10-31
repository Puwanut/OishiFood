let show = document.getElementById('block1');
let show2 = document.getElementById('block2');

function promo(){
    let topic = document.getElementById('template-contactform-service').value;
    if (topic <= 1){
        show.classList.remove("FadeOut");
        show2.classList.remove("FadeOut");

        show.classList.add("FadeIn");
        show2.classList.add("FadeIn");
        show.style.display = "block";
        show2.style.display = "block";
    }else{
        show.classList.remove("FadeIn");
        show2.classList.remove("FadeIn");

        show.classList.add("FadeOut");
        show2.classList.add("FadeOut");
        setTimeout(displayNone, 300);
    }
}
function displayNone() {
    show.style.display = "none";
    show2.style.display = "none";
}