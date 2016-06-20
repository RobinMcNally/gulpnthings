var items = [
  {
    name: "apple",
    price: 1.25
  },
  { name: "banana",
    price: 0.07
  },
  {
    name: "cereal",
    price: 3.00
  }
]

var itemlist = document.getElementById("list");
var total = document.getElementById("total");

function appendElement(name, price) {
    items.push({name, price});
}

function Displaylist() {
    var sum = 0.0;
    itemlist.innerHTML = "";
    items.forEach(function(item){
        console.log(item.name + ": $" + item.price);
        itemlist.innerHTML += "<li>" + item.name + " - $" + item.price + "</li>\n"; 
        sum += Number(item.price);
    });
    total.innerHTML = "$" + sum;
}

function addElement() {
    var name = document.getElementById("itemname");
    var price = document.getElementById("itemprice");
    appendElement(name.value, price.value);
    Displaylist();
}

Displaylist();
