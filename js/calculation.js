function calculate() {
  var name = document.getElementById("name").value;
  var m = document.getElementById("m").value;
  var cs = document.getElementById("cs").value;
  var s = document.getElementById("s").value;
  if (name === "") {
    alert("Please enter a name");
  } else if (m === "" || cs === "" || s === "") {
    alert("Hey " + name + "! Please enter all the marks");
  } else {
    var tm = document.getElementById("tm");
    var per = document.getElementById("per");
    var max = document.getElementById("max");
    var total = eval(m) + eval(cs) + eval(s);
    tm.value = total;
    var percentage = total / 3;
    per.value = percentage + " %";
    if (eval(m) > eval(cs) && eval(m) > eval(s)) {
      max.value = m;
    } else if (eval(cs) > eval(s)) {
      max.value = cs;
    } else {
      max.value = s;
    }
  }
}
