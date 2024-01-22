class Employee {
    _fname;
    _lname;
    _age;
    _address;
    constructor(){
        this._fname = "";
        this._lname = "";
        this._age = "";
        this._address = "";
    }
    set fname(x){
        this._fname = x;
    }
    set lname(x){
        this._lname = x;
    }
    set age(x){
        this._age = x;
    }
    set address(x){
        this._address = x;
    }
    get fname(){
        return this._fname;
    }
    get lname(){
        return this._lname;
    }
    get age(){
        return this._age;
    }
    get address(){
        return this._address;
    }
    fullName(){
        return this._fname + " " + this._lname;
    }
    fullAddress(){
        return this.fullName() + '<br>' + this._address;
    }
}
let myFunc = function(){
    let e1 = document.forms["myForm"]["fname"];
    let e2 = document.forms["myForm"]["lname"]; 
    let e3 = document.forms["myForm"]["age"]; 
    let e4 = document.forms["myForm"]["addr"];

    let emp = new Employee();

    emp.fname = e1.value;
    emp.lname = e2.value;
    emp.age = e3.value;
    emp.address = e4.value;

    let v1 = document.getElementById("fullname");
    let v2 = document.getElementById("fulladdress");

    v1.innerHTML = emp.fullName();
    v2.innerHTML = emp.fullAddress();
    return false;
}