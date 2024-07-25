var start = 1;

function set_time() {
    setInterval(image_show, 1000);
}

function image_show() {
    var image_data;
    if (start == 1) {
        image_data = "../assets/Sci_tech.jpeg";
    } else if (start == 2) {
        image_data = "../assets/AI.jpeg";
    } else if (start == 3) {
        image_data = "../assets/Arts.jpeg";
    } else if (start == 4) {
        image_data = "../assets/Weird_Theories.png";
    } else {
        image_data = "../assets/Sci_tech.jpeg";
        start = 1;
    }
    document.getElementById("data").src = " " + image_data;
    start++;
}