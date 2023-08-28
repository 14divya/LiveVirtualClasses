function calculate(){
    var m = document.getElementById("m").value;
    var cs = document.getElementById("cs").value;
    var s = document.getElementById("s").value;
    var tm = document.getElementById("tm");
    var per = document.getElementById("per");
    var max = document.getElementById("max");

    
    
    
    var total = eval(m)+eval(cs)+eval(s);
    tm.textContent = total;
    var percentage = total/3;
    per.textContent = percentage+" %";
    if(eval(m) > eval(cs) && eval(m) > eval(s)){
        max.textContent = m;
    }
    else if(eval(cs) > eval(s)){
        max.textContent = cs;
    }
    else{
        max.textContent = s;
    }
}
