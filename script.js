var img = document.getElementById('img');

var slides = ['slider1.jpeg', 'slider2.jpeg'];

var Start = 0;

function slider() {
    if (Start < slides.length) {
        Start = Start + 1;
    }
    else {
        Start = 1;
    }
    console.log(img);
    img.innerHTML = "<img src=" + slides[Start - 1] + ">";

}
setInterval(slider, 2000);

function hello() {
    var email = document.getElementById("email").value;
    var err_message = document.getElementById("err_message");

    err_message.style.padding = "10px";
    var text;
    if (email.indexOf('@') == -1) {
        text = "*Please enter valid email id";
        err_message.innerHTML = text;
        return false;
    }
    alert("Thank you for subscribing. You have been successfully subscribed .");
    return true;
}
