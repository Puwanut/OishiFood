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
                var fullMeterial = document.getElementById("full_meterial" + i);
                picture.insertAdjacentHTML("beforeend", 
                "<img src='" + data[i].image + "' id='entry-picture'>");
                meterial.insertAdjacentHTML("beforeend", 
                "<h4 id='posthead'>" + data[i].header + "</h4>");
                meterial.insertAdjacentHTML("beforeend", 
                "<p class='font-regular' id='date'><i class='fas fa-calendar mini_calendar'></i> " + data[i].date +"</p>");
                meterial.insertAdjacentHTML("beforeend", 
                "<div class='font-light' id='meterial_infront'>" + data[i].meterial_infront + "</div>");
                meterial.insertAdjacentHTML("beforeend", 
                "<a href='#full_meterial" + i +"' data-toggle='modal' data-target='#full_meterial" + i + "' class='btn-seemore'><i class='fas fa-angle-right' aria-hidden='true' style='font-weight: 501;'></i><span style='font-size: 12px;'>ดูเพิ่มเติม</span></a>");
                fullMeterial.insertAdjacentHTML("beforeend", 
                " <div class='modal-content'>"
                + "<div class='modal-header'>"
                + "<button type='button' class='close' data-dismiss='modal'><img src='https://www.oishifood.com/img/x-close.png'></button>"
                + "</div>"
                + "<div class='modal-body'>"
                + "<img src='" + data[i].image + "' id='full_image'>"
                + "<h1 id='full_topic' class='font-regular'>" + data[i].header + "</h1>"
                + "<p id='f_meterial' class='font-light'>" + data[i].meterial1 + "<br><br>" + data[i].meterial2 + "<p>");
                fullMeterial.insertAdjacentHTML("beforeend", "</div>");
                fullMeterial.insertAdjacentHTML("beforeend", " </div>");
            }
            for(i = 0; i < underline.length; i++){
                underline[i].style.marginTop = "40px";
                underline[i].style.marginBottom = "25px";
                underline[i].style.border = "dashed 0.5px";
                underline[i].style.opacity = "0.05";
            }
        }
