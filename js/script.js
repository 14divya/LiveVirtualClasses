function jfun() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var suggestions = document.getElementById("suggestions").value;
    if (name == "" || email == "" || suggestions == "") {
        alert("Enter the fields");
    }
    else {
        alert("Thanks for contacting with us for LVC Courses !");
    }
}
function subscribe() {
    var name = prompt("Enter your name");
    console.log(name);
    var country;
    if (name != null) {
        country = prompt("Enter your country");
        var discount = "none";
        if (country == "India") {
            discount = "50%";
            alert(name + ", you are successfully subscribed with a discount of " + discount);
        } else {
            alert(name + ", you are successfully subscribed with no discount :(");
        }

    } else {
        alert("Subscription unsuccesful!!!")
    }

}
function openwin() {
    window.open("instruction.html", "Instructions", "width=800,height=800,left=250");
}
function openDetails() {

    var course = document.getElementById("dropdown").value;
    if (course == "mern") {
        var myWindow = window.open("mern.html", "MERN", "width=500,height=500,left=350,top=100");

    } else if (course == "mean") {
        var myWindow = window.open("mean.html", "MEAN", "width=500,height=500,left=350,top=100");

    } else {
        var myWindow = window.open("mevn.html", "MEVN", "width=500,height=500,left=350,top=100");
    }

}
function openTest() {
    window.open("test.html");
}
function checkResult() {

    var ans1 = document.getElementsByName("q1");
    var ans2 = document.getElementsByName("q2");
    var ans3 = document.getElementsByName("q3");
    var ans4 = document.getElementsByName("q4");
    var ans5 = document.getElementsByName("q5");
    var tm1 = 0;
    var tm2 = 0;
    var tm3 = 0;
    var tm4 = 0;
    var tm5 = 0;
    var tm = 0;
    if (ans1[1].checked == true) {
        tm1 = 2;
    }
    if (ans2[2].checked == true) {
        tm2 = 2;
    }
    if (ans3[0].checked == true) {
        tm3 = 2;
    }
    if (ans4[1].checked == true) {
        tm4 = 2;
    }
    if (ans5[2].checked == true) {
        tm5 = 2;
    }
    tm = tm1 + tm2 + tm3 + tm4 + tm5;
    alert("You scored " + tm + " marks!");

}