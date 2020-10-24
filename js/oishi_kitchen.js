let requestURL = 'oishi_kitchen_sample.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();

function dataReportStatus(data) {
    let all_category = document.getElementById("all-category");

    for (let i = 0; i < data.length; i++) {
        let menu_container = document.createElement("div");
        menu_container.className = "menu-container";
        menu_container.id = data[i].topic_id;

        let inner = '';
        inner += '<h2 class="menu-topic">' + data[i].topic + '</h2>';
        inner += '<div class="menu-item-container">'
        for (let j = 0; j < data[i].items.length; j++) {
            inner += '<div class="menu-item">\
                        <div class="menu-img">\
                            <img src="' + data[i].items[j].img + '" class="img-fluid">\
                        </div>\
                        <div class="menu-text">\
                            <h3>' + data[i].items[j].name + '</h3>\
                            <p>' + data[i].items[j].price + '</p>\
                        </div>\
                      </div>';
        }
        inner += '</div>';
        menu_container.innerHTML = inner;
        all_category.appendChild(menu_container);

    }

    let healthy_div = document.getElementById("Healthy");
    let healthy_item_container = healthy_div.getElementsByClassName("menu-item-container")[0];
    let text_div = document.createElement("div");
    text_div.id = "Healthy-text";
    text_div.innerHTML = '<h3>คัดสรรเมนูเพื่อสุขภาพสไตล์ญี่ปุ่น พร้อมอรรถรสแห่งมื้ออาหารที่ลงตัว</h3>\
                            <p>ไลฟ์สไตล์การใช้ชีวิตในเมืองใหญ่ ความเร่งรีบ ความเครียด และสภาพแวดล้อมที่เต็มไปด้วยมลภาวะ\
                                ย่อมเป็นปัจจัยที่ทำให้ทุกคนมองหาการรักษาความสมดุลของสุขภาพให้กับตัวเองและครอบครัว หากกล่าวถึง\
                                อาหารที่เป็นปัจจัยสำคัญในการใช้ชีวิต เราไม่ได้รับประทานอาหารเพื่อคลายความหิวเท่านั้น\
                                แต่เรายังแสวงหาและต้องการลิ้มรสอาหารเพื่อให้เราเป็นเจ้าของร่างกายที่มีสุขภาพดีด้วย\
                                <a href="https://oishifood.com/healthy-meal.html">ดูเมนูเพื่อสุขภาพสไตล์ญี่ปุ่นเพิ่มเติม คลิก</a>\
                            </p>';
    healthy_div.insertBefore(text_div, healthy_item_container);
}

