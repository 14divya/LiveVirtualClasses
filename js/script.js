function jfun() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var suggestions = document.getElementById("suggestions").value;
  if (name == "" || email == "" || suggestions == "") {
    alert("Enter the fields");
  } else {
    alert("Thanks for contacting with us for LVC Courses !");
  }
}
function subscribe() {
  var name = prompt("Enter your name");
  console.log(name);
  var country;
  if (name !== "" && name !== null) {
    country = prompt("Enter your country");
    if(country !== null){
    var discount = "none";
    if (country === "India") {
      discount = "50%";
      alert(
        name +
          ", you are successfully subscribed with a discount of " +
          discount
      );
    } else {
      alert(name + ", you are successfully subscribed without any discount");
    }
}else{
    alert("Subscription unsuccessful!!!")
}
  } else {
    alert("Subscription unsuccesful!!!");
  }
}
function openwin() {
  window.open(
    "instruction.html",
    "Instructions",
    "width=800,height=800,left=250"
  );
}
function openDetails() {
  var course = document.getElementById("dropdown").value;
  if (course == "mern") {
    window.open("mern.html", "MERN", "width=500,height=500,left=350,top=100");
  } else if (course == "mean") {
    window.open("mean.html", "MEAN", "width=500,height=500,left=350,top=100");
  } else {
    window.open("mevn.html", "MEVN", "width=500,height=500,left=350,top=100");
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
  var tm = 0;
  if (ans1[1].checked == true) {
    tm += 2;
  }
  if (ans2[2].checked == true) {
    tm += 2;
  }
  if (ans3[0].checked == true) {
    tm += 2;
  }
  if (ans4[1].checked == true) {
    tm += 2;
  }
  if (ans5[2].checked == true) {
    tm += 2;
  }
  alert("You scored " + tm + " marks!");
}
function countDown() {
  var timex = document.getElementById("demo");
  timex.classList.remove('btn-info');
  timex.classList.add('btn-warning');
  var j = 62;
  var time = setInterval(function () {
    timex.innerHTML = (j-2) + " secs";
    j--;
   
    if(j == 0){
        clearInterval(time);
        alert("Time's up!!!");
        checkResult();
        timex.innerHTML = "Start timer";
        timex.classList.remove('btn-warning');
  timex.classList.add('btn-info');
    }
  }, 1000);
// for(i=4,j=60;j>=0;j--){
//     timex.innerHTML = i + " mins : " + j + " secs";
//     if(j == 0){
//         i--;
//         j=60;
//     }
// }
}
