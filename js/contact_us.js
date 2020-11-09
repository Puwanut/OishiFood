var numName = 0;
function contactUs(){
    name = document.getElementsByClassName("firstname")[0].value.length;
    email = document.getElementsByClassName("email")[0].value.length;
    in_email = document.getElementsByClassName("email")[0].value;
    message = document.getElementsByClassName("message")[0].value.length;
    if(name <= 0){
        document.getElementsByClassName("firstname")[0].style.border = "solid red 2px";
    }
    else{
        document.getElementsByClassName("firstname")[0].style.border = "solid #dddddd 2px";
    }
    if(email <= 0){
        document.getElementsByClassName("email")[0].style.border = "solid red 2px";
    }
    else{
        for(var i = 0; i < email; i++){
            if((in_email.charCodeAt(i) == 64) && (in_email.charAt(i-1) != "") && (in_email.charAt(i+1) != "")){
                document.getElementsByClassName("email")[0].style.border = "solid #dddddd 2px";
                break;
            }
            else{
                document.getElementsByClassName("email")[0].style.border = "solid red 2px";
            }
        }
    }
    if(message <= 0){
        document.getElementsByClassName("message")[0].style.border = "solid red 2px";
    }
    else{
        document.getElementsByClassName("message")[0].style.border = "solid #dddddd 2px";
    }
    return false;
}
