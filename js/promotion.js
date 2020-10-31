function promo(){
    let topic = document.getElementById('template-contactform-service').value;
    if (topic == 1){
        let show = document.getElementById('block1');
        let show2 = document.getElementById('block2');
        show.classList.remove = "FadeOut"
        show2.classList.remove = "FadeOut"
        show.classList.add = "FadeIn"
        show2.classList.add = "FadeIn"
        show.style.display = "block";
        show2.style.display = "block";
    }else{
        let show = document.getElementById('block1');
        let show2 = document.getElementById('block2');
        show.style
        show.style.display = "none";
        show2.style.display = "none";
        
    }
}
function timeFunction() {
    setTimeout(promo(), 1500);
}