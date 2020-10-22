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

/*
    data[0] = OISHI GRAND
    data[1] = OISHI EATERIUM
    data[2] = OISHI BUFFET
    data[3] = Nikuya
    data[4] = Shabush
    data[5] = OISHI RAMEN
    data[6] = KAKASHI
    data[7] = HOU YUU
    data[8] = OYOKI
    data[9] = SAKAE
*/

function dataReportStatus(data) {
    let restaurant_provinces = data[3].provinces;

    //load all province name to province-dropdown
    for (let i=0; i < restaurant_provinces.length; i++){

        let province_name = restaurant_provinces[i].province_name;
        let branches = restaurant_provinces[i].branch;
        add_option("province-dropdown", province_name);
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

    // setDefaultBranch("ชื่อจังหวัด", "ชื่อสาขา");

}

province_dropdown.onchange = function setBranchDropdown() {
    for (let i=0; i < provinces_name_array.length; i++){
        if (provinces_name_array[i] === province_dropdown.value) {
            clear_option("branch-dropdown");
            load_option("branch-dropdown", all_branch_name_array[i]);
            break;
        }
    }
}

branch_dropdown.onchange = function setDetails() {
    let selected_province = province_dropdown.value;
    let selected_branch = branch_dropdown.value;
    console.log(selected_province + selected_branch);
    document.getElementById("showdetails").innerHTML = "<p>" + selected_province + " " + selected_branch + "</p>";
}

function add_option(select_id, text) {
    let select = document.getElementById(select_id);
    select.options[select.options.length] = new Option(text, text);
}

function clear_option(select_id) {
    let select = document.getElementById(select_id);
    select.options.length = 0;
    select.options[0] = new Option("-- เลือกสาขา --", "0");
}

function load_option(select_id, option_array) {
    for (let i = 0; i < option_array.length; i++) {
        add_option(select_id, option_array[i]);
    }
}

function open_googlemap(lat, lng) {
    window.open('https://maps.google.com?saddr=Current+Location&daddr=' + latitude + ',' + longtitude + '');
}
