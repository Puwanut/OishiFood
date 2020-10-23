// import json
let json_data;
let requestURL = '../restaurant_sample.json';
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
let provinces_name_array = [];
let all_branch_name_array = [];
let restaurant_number = 2;

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

    //load all province name to province-dropdown
    for (let i=0; i < restaurant_provinces.length; i++){

        let province_name = restaurant_provinces[i].province_name;
        let branches = restaurant_provinces[i].branch;
        add_option("province-dropdown", province_name, i+1);
        provinces_name_array.push(province_name);

        // for (let i=0; i < provinces_name_array.length; i++){

        // }
        let branch_name_array = [];
        for (let j=0; j < branches.length; j++) {
            branch_name_array.push(branches[j].name);
        }
        console.log(branch_name_array);
        all_branch_name_array.push(branch_name_array);



    }
    console.log(all_branch_name_array);

    // setDefaultBranch("ชื่อจังหวัด", "ชื่อสาขา");

}

province_dropdown.onchange = function setBranchDropdown() {
    for (let i=0; i < provinces_name_array.length; i++){
        clear_option("branch-dropdown");
        if (i == parseInt(province_dropdown.value)-1) {
            load_option("branch-dropdown", all_branch_name_array[i]);
            break;
        }
    }
}

branch_dropdown.onchange = function setDetails() {
    if (province_dropdown.value > 0 && branch_dropdown.value > 0){
        let province_value = parseInt(province_dropdown.value)-1;
        let branch_value = parseInt(branch_dropdown.value)-1;
        let branch_data = json_data[restaurant_number].provinces[province_value].branch[branch_value];
        document.getElementById("showdetails").innerHTML = "<p>" + branch_data.name +  "</p>" +
        "<p>" + branch_data.address +  "</p>" +
        "<p>" + branch_data.phone +  "</p>" +
        "<p>" + branch_data.time +  "</p>" +
        "<p>" + branch_data.latitude + ", " + branch_data.longtitude + "</p>" +
        "<p>" + branch_data.name +  "</p>" +
        "<p>" + branch_data.src +  "</p>" +
        '<iframe src="' + branch_data.src + '" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';

    }


}

function add_option(select_id, text, value) {
    let select = document.getElementById(select_id);
    select.options[select.options.length] = new Option(text, value);
}

function clear_option(select_id) {
    let select = document.getElementById(select_id);
    select.options.length = 0;
    select.options[0] = new Option("-- เลือกสาขา --", "0");
}

function load_option(select_id, option_array) {
    for (let i = 0; i < option_array.length; i++) {
        add_option(select_id, option_array[i], i+1);
    }
}

function open_googlemap(lat, lng) {
    window.open('https://maps.google.com?saddr=Current+Location&daddr=' + latitude + ',' + longtitude + '');
}
