function checkNumber(x){
    let v = x.value;
    let m = document.getElementById("age");
    if(isNaN(v) || v.length == 0){
        m.style = "border:2px dashed red; color:red; background-color:white;";
        return false;
    }
    else{
        m.style = "border:1px solid grey; color:black; background-color:lightblue;";
        return true;
    }
}

function checkGender(x){
    let v = x.value;
    v = v.toLowerCase();
    if(v.localeCompare("male") == 0 || v.localeCompare("female") == 0){
        x.style = "border:1px solid grey; color:black; background-color:lightblue;";
        return true;
    }
    else{
        x.style = "border:2px dashed red; color:red; background-color:white;";
        return false;
    }
}

function checkPass(x){
    let v = x.value
    if(v.length >= 8){
        x.style = "border:1px solid grey; color:black; background-color:lightblue;";
        return true;
    }
    else{
        x.style = "border:2px dashed red; color:red; background-color:white;";
        return false;
    }
}

function checkRepass(x){
    let repass = document.getElementById("repassword").value;
    let pass = document.getElementById("password").value;
    if(repass === pass && repass.length != 0){
        x.style = "border:1px solid grey; color:black; background-color:lightblue;";
        return true;
    }
    else{
        x.style = "border:2px dashed red; color:red; background-color:white;";
        return false;
    }
}

function validate(){
    let f = true;
    let m = document.getElementById("fname");
    if(m.value.length == 0){
        m.style = "border:2px dashed red; color:red; background-color:white;";
        f1 = false;
    }
    else{
        m.style = "border:1px solid grey; color:black; background-color:lightblue;";
        f1 = true;
    }
    m = document.getElementById("lname");
    if(m.value.length == 0){
        m.style = "border:2px dashed red; color:red; background-color:white;";
        f2 = false;
    }
    else{
        m.style = "border:1px solid grey; color:black; background-color:lightblue;";
        f2 = true;
    }
    m = document.getElementById("age");
    f5 = checkNumber(m);
    m = document.getElementById("gender");
    f6 = checkGender(m);
    m = document.getElementById("country");
    if(m.value.length == 0){
        m.style = "border:2px dashed red; color:red; background-color:white;";
        f3 = false;
    }
    else{
        m.style = "border:1px solid grey; color:black; background-color:lightblue;";
        f3 = true;
    }
    m = document.getElementById("username");
    if(m.value.length == 0){
        m.style = "border:2px dashed red; color:red; background-color:white;";
        f4 = false;
    }
    else{
        m.style = "border:1px solid grey; color:black; background-color:lightblue;";
        f4 = true;
    }
    m = document.getElementById("password");
    f7 = checkPass(m);
    m = document.getElementById("repassword");
    f8 = checkRepass(m);
    f = f1 && f2 && f3 && f4 && f5 && f6 && f7 && f8;
    return f;
}