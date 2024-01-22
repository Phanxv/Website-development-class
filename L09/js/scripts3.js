let sale = {
    _pname: " ",
    _quantity: 0,
    _price: 0,
    _description: " ",
    set setPname(pn){
        this._pname = pn;
    },
    set setQuantity(q){
        this._quantity = q;
    },
    set setPrice(p){
        this._price = p;
    },
    set setDescription(des){
        this._description = des;
    },
    get getPname(){
        return this._pname;
    },
    get getQuantity(){
        return this._quantity;
    },
    get getPrice(){
        return this._price;
    },
    get getDescription(){
        return this._description;
    },
    calTotal(){
        return this._quantity * this._price; 
    }
};

let myFunc = function(){
    let e1 = document.forms["myForm"]["pname"];
    let e2 = document.forms["myForm"]["quantity"];
    let e3 = document.forms["myForm"]["price"];
    let e4 = document.forms["myForm"]["description"];

    sale.setPname = e1.value;
    sale.setQuantity = e2.value;
    sale.setPrice = e3.value;
    sale.setDescription = e4.value;

    let v1 = document.getElementById("total");

    v1.innerHTML = sale.calTotal();
    return false;
}