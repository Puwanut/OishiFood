function contactUs(){
    name = document.getElementsByClassName("firstname")[0].Value;
    nameLong = name.length;
    if(nameLong == 0){
        alert(nameLong);
    }
    return false;
}