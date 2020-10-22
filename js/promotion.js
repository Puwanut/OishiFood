function promo(){
    let topic = document.getElementById('template-contactform-service').value;
    if (topic == 1){
        let show = document.getElementById('block1');
        show.style.display = "block";
        let show2 = document.getElementById('block2');
        show2.style.display = "block";
    }else{
        let show = document.getElementById('block1');
        show.style.display = "none";
        let show2 = document.getElementById('block2');
        show2.style.display = "none";
    }
}