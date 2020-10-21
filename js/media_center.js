let requestURL = 'media_center.json'; 
        let request = new XMLHttpRequest(); 
        request.onreadystatechange = function () { 
            if (request.readyState == 4 && request.status == 200) {             
                dataReportStatus(JSON.parse(request.responseText));
                fullmeterial(JSON.parse(request.responseText));          
            } };
        request.open("GET", requestURL, true);
        request.send();
        
        function dataReportStatus(data) {
            let i = 0;
            let underline = document.querySelectorAll("#underline_meterial");
            for(i; i < data.length; i++){
                var picture = document.getElementById("picture" + i);
                var meterial = document.getElementById("meterial" + i);
                var body = data[i].meterial1;
                picture.insertAdjacentHTML("beforeend", 
                "<img src='" + data[i].image + "' id='entry-picture'>");
                meterial.insertAdjacentHTML("beforeend", 
                "<b id='posthead'>" + data[i].header + "</b>");
                meterial.insertAdjacentHTML("beforeend", 
                "<p class='font-regular' id='date'><img id='mini-calender' src='https://img.icons8.com/android/24/000000/calendar.png'/> " + data[i].date +"</p>");
                meterial.insertAdjacentHTML("beforeend", 
                "<div style='color : #666666;' class='font-light'>" + data[i].meterial_infront + "</div>");
                meterial.insertAdjacentHTML("beforeend", 
                "<button id='button_to_readmore'><span class='font-light' id='inside_button'>ดูเพิ่มเติม</span></button>");
            }
            for(i = 0; i < underline.length; i++){
                underline[i].style.marginTop = "40px";
                underline[i].style.marginBottom = "25px";
                underline[i].style.border = "dashed 0.5px";
                underline[i].style.opacity = "0.05";
            }
        }