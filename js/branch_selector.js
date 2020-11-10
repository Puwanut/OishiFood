// import json
let json_data;
let requestURL = '../json/restaurant_branch.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        json_data = JSON.parse(request.responseText)
        dataReportStatus(json_data);
    }
};
request.open("GET", requestURL, true);
request.send();

let province_dropdown = document.getElementById("province-dropdown");
let branch_dropdown = document.getElementById("branch-dropdown");
let restaurant_number = parseInt(document.getElementById("dropdown-location").getAttribute("restaurant_number"));
let provinces_name_array = [];
let all_branch_name_array = [];

/*
    restaurant_number
    0 = OISHI GRAND
    1 = OISHI EATERIUM
    2 = OISHI BUFFET
    3 = Nikuya
    4 = Shabushi
    5 = OISHI RAMEN
    6 = KAKASHI
    7 = HOU YUU
    8 = OYOKI
    9 = SAKAE
*/

function dataReportStatus(data) {
    let restaurant_provinces = data[restaurant_number].provinces;

    for (let i=0; i < restaurant_provinces.length; i++){

        //load all province name in province-dropdown
        let province_name = restaurant_provinces[i].province_name;
        let branches = restaurant_provinces[i].branch;
        add_option(province_dropdown, province_name, i+1);
        provinces_name_array.push(province_name);

        //keep each branch name of provinces for prepare to load in branch-dropdown
        let branch_name_array = [];
        for (let j=0; j < branches.length; j++) {
            branch_name_array.push(branches[j].name);
        }
        console.log(branch_name_array);
        all_branch_name_array.push(branch_name_array);

    }
    console.log(all_branch_name_array);
    setDefaultBranch(restaurant_number)

}



province_dropdown.onchange = function() {setBranchDropdown()};
branch_dropdown.onchange = function() {setDetails()};

function setBranchDropdown() {
    for (let i=0; i < provinces_name_array.length; i++){
        clear_option(branch_dropdown);
        if (i == parseInt(province_dropdown.value)-1) {
            load_option(branch_dropdown, all_branch_name_array[i]);
            break;
        }
    }
}

function setDetails() {
    if (province_dropdown.value > 0 && branch_dropdown.value > 0){
        let province_value = parseInt(province_dropdown.value)-1;
        let branch_value = parseInt(branch_dropdown.value)-1;
        let branch_data = json_data[restaurant_number].provinces[province_value].branch[branch_value];

        let branch_name = document.getElementById("branch-name");
        let branch_address = document.getElementById("branch-address");
        let branch_phone = document.getElementById("branch-phone");
        let branch_time = document.getElementById("branch-time");
        let branch_navigation = document.getElementById("branch-navigation");
        let branch_map = document.getElementById("branch-map");

        branch_name.innerHTML = '<h4 class="mb-0">\
                                    <img src="https://www.oishifood.com/img/branch-icon-1.png" class="mr-2" alt="branch icon">'
                                    + branch_data.name +
                                '</h4>';

        branch_address.innerHTML = '<h5 class="mb-0">\
                                        <img src="https://www.oishifood.com/img/branch-icon-2.png" class="mr-2" alt="address icon">' +
                                        'ที่อยู่ : ' +
                                    '</h5>\
                                    <p class="mb-0" style="margin-left: 44px">' + branch_data.address + '</p>';

        branch_phone.innerHTML = '<h5 class="mb-0">\
                                    <img src="https://www.oishifood.com/img/branch-icon-3.png" class="mr-2" alt="telephone icon">' +
                                    'โทรศัพท์ : <span>' + branch_data.phone + '</span>\
                                </h5>';

        branch_time.innerHTML = '<h5 class="mb-0">\
                                    <img src="https://www.oishifood.com/img/branch-icon-4.png" class="mr-2" alt="clock icon">' +
                                    'เวลาทำการ : <span>' + branch_data.time + '</span>\
                                </h5>';

        branch_navigation.innerHTML = '<a href="https://maps.google.com?saddr=Current+Location&daddr=' + branch_data.latitude + ',' + branch_data.longtitude + '" target="_blank">\
                                            <h5 class="mb-0">\
                                                <img src="https://www.oishifood.com/img/branch-icon-5.png" class="mr-2" alt="navigation icon">' +
                                                'ดูเส้นทางการเดินทาง' +
                                            '</h5>\
                                        </a>';

        branch_map.innerHTML = '<iframe src="' + branch_data.src + '" width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';

    }
}

function setDefaultBranch(restaurant_number){
    switch (restaurant_number){
        case 0: province_dropdown.value = 1; break;
        case 1: province_dropdown.value = 1; break;
        case 2: province_dropdown.value = 4; break;
        case 3: province_dropdown.value = 4; break;
        case 4: province_dropdown.value = 1; break;
        case 5: province_dropdown.value = 1; break;
        case 6: province_dropdown.value = 5; break;
        case 7: province_dropdown.value = 1; break;
        case 8: province_dropdown.value = 1; break;
        case 9: province_dropdown.value = 1; break;
    }
    setBranchDropdown();
    branch_dropdown.value = 1
    setDetails();
}

function add_option(select, text, value) {
    select.options[select.options.length] = new Option(text, value);
}

function clear_option(select) {
    select.options.length = 1;
}

function load_option(select, option_array) {
    for (let i = 0; i < option_array.length; i++) {
        add_option(select, option_array[i], i+1);
    }
}
