class Shape {
    _color;
    PI;
    constructor(c){
        this._color = c;
        this.PI = 3.14159;
    }
    set color(x){
        this._color = x;
    }
    get color(){
        return this._color; 
    }

}
class Cylinder extends Shape {
    _height;
    _radius;
    constructor(h,r,c){
        super(c);
        this._height = h;
        this._radius = r;
    }
    set height(x){
        this._height = x;
    }
    get height(){
        return this._height;
    }
    set radius(x){
        this._radius = x;
    }
    get radius(){
        return this._radius;
    }
    calCylinderArea(){
        return 2 * this.PI * this._radius * (this._height + this._radius);
    }
}

class Triangle extends Shape {
    _base;
    _height;
    constructor(b,h,c){
        super(c);
        this._base = b;
        this._height = h;
    }
    set height(x){
        this._height = x;
    }
    get height(){
        return this._height;
    }
    set base(x){
        this._base = x;
    }
    get base(){
        return this._base;
    }
    calTriangleArea(){
        return 1/2 * this._base * this._height;
    }
}

let myFunc1 = function(){
    let e1 = document.forms["myForm"]["color"];
    let e2 = document.forms["myForm"]["height"]; 
    let e3 = document.forms["myForm"]["radius"];

    let cylinder = new Cylinder(e2.value, e3.value, e1.value);

    let v1 = document.getElementById("cylinder");
    v1.innerHTML = cylinder.calCylinderArea();

    return false;
}

let myFunc2 = function(){
    let e1 = document.forms["myForm"]["color"];
    let e2 = document.forms["myForm"]["height"]; 
    let e3 = document.forms["myForm"]["base"];

    let triangle = new Triangle(e3.value, e2.value, e1.value);

    let v1 = document.getElementById("triangle");
    v1.innerHTML = triangle.calTriangleArea();

    return false;
}