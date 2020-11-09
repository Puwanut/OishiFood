var numName = 0;
var numMessage = 0;
var numEmail = 0;

function contactUs(){
    name = document.getElementsByClassName("firstname")[0].value.length;
    email = document.getElementsByClassName("email")[0].value.length;
    in_email = document.getElementsByClassName("email")[0].value;
    message = document.getElementsByClassName("message")[0].value.length;

    if(name <= 0){
        document.getElementsByClassName("firstname")[0].style.border = "solid red 2px";
        numName = 1;
    }
    else{
        document.getElementsByClassName("firstname")[0].style.border = "solid #dddddd 2px";
        numName = 0;
    }

    if(email <= 0){
        document.getElementsByClassName("email")[0].style.border = "solid red 2px";
        numEmail = 1;
    }
    else{
        for(var i = 0; i < email; i++){
            if((in_email.charCodeAt(i) == 64) && (in_email.charAt(i-1) != "") && (in_email.charAt(i+1) != "")){
                document.getElementsByClassName("email")[0].style.border = "solid #dddddd 2px";
                numEmail = 0;
                break;
            }
            else{
                document.getElementsByClassName("email")[0].style.border = "solid red 2px";
                numEmail = 1;
            }
        }
    }

    if(message <= 0){
        document.getElementsByClassName("message")[0].style.border = "solid red 2px";
        numMessage = 1;
    }
    else{
        document.getElementsByClassName("message")[0].style.border = "solid #dddddd 2px";
        numMessage = 0;
    }

    if((numName == 1) || (numEmail == 1) || (numMessage == 1)){
        correct = 0;
    }
    if((numName == 0) && (numEmail == 0) && (numMessage == 0)){
        document.getElementById("fate").style.opacity = "0.3";
        document.getElementById("fate").style.backgroundColor = "#ffffff"
    }
    return false;

}

function contactUsOn(){
    name = document.getElementsByClassName("firstname")[0].value.length;
    email = document.getElementsByClassName("email")[0].value.length;
    in_email = document.getElementsByClassName("email")[0].value;
    message = document.getElementsByClassName("message")[0].value.length;

    if(numName == 1){
        if(name <= 0){
            document.getElementsByClassName("firstname")[0].style.border = "solid red 2px";
        }
        else{
            document.getElementsByClassName("firstname")[0].style.border = "solid #dddddd 2px";
        }
    }

    if(numEmail == 1){
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
    }

    if(numMessage == 1){
        if(message <= 0){
            document.getElementsByClassName("message")[0].style.border = "solid red 2px";
        }
        else{
            document.getElementsByClassName("message")[0].style.border = "solid #dddddd 2px";
        }
    }
}
