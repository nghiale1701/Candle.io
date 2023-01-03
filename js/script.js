function validateForm1() {
    var x = document.forms["form1"]["email"].value;
    if (x == "" || x == null) {
      alert("Please enter an email address.");
      return false;
    }

    var y = document.forms["form1"]["password"].value;
    if (y == "" || y == null) {
      alert("Please enter your password.");
      return false;
    }
}

function validateForm2() {
    var x = document.forms["form2"]["email"].value;
    if (x == "" || x == null) {
      alert("Please enter an email address.");
      return false;
    }

    var y = document.forms["form2"]["password"].value;
    if (y == "" || y == null) {
      alert("Please enter your password.");
      return false;
    }

    var z = document.forms["form2"]["cf-password"].value;
    if (z == "" || z == null) {
      alert("Please confirm your password.");
      return false;
    }
}

var minusBtn1 = document.querySelector(".qtyminus1");
var plusBtn1 = document.querySelector(".qtyplus1");
var total1 = document.getElementById("total1");

minusBtn1.addEventListener("click", function() { calc1("subtract"); });
plusBtn1.addEventListener("click", function() { calc1("add"); });

function calc1(operation) {

    var input = document.getElementById("cnt1");
    var price = +input.dataset.price;

    if(operation === "add"){
        input.innerHTML = parseInt(input.innerHTML) + 1 ;
    } else  if(operation === "subtract"){
      // Set value, but don't let it go below zero
      input.innerHTML = (input.innerHTML - 1 < 1) ? 0 : input.innerHTML -1;    
    }

    total1.innerHTML = (input.innerHTML * price).toLocaleString() + " VNĐ";
    countTotal();
}


var minusBtn2 = document.querySelector(".qtyminus2");
var plusBtn2 = document.querySelector(".qtyplus2");
var total2 = document.getElementById("total2");

minusBtn2.addEventListener("click", function() { calc2("subtract"); });
plusBtn2.addEventListener("click", function() { calc2("add"); });

function calc2(operation) {

    var input = document.getElementById("cnt2");
    var price = +input.dataset.price;

    if(operation === "add"){
        input.innerHTML = parseInt(input.innerHTML) + 1 ;
    } else  if(operation === "subtract"){
      // Set value, but don't let it go below zero
      input.innerHTML = (input.innerHTML - 1 < 1) ? 0 : input.innerHTML -1;    
    }
    
    total2.innerHTML = (input.innerHTML * price).toLocaleString() + " VNĐ";
    countTotal();
}


function countTotal() {

  var sum = document.getElementById("allTotal");
  var total1 = document.getElementById("total1");
  var total2 = document.getElementById("total2");


  var allTotal1 = total1.innerText.replace("VNĐ","").replace(".","").replace(".","");
  var allTotal2 = total2.innerText.replace("VNĐ","").replace(".","").replace(".","");

  console.log(allTotal1);
  console.log(allTotal2);

  var total = parseInt(allTotal1) + parseInt(allTotal2);
  sum.innerHTML = total.toLocaleString() + " VNĐ";
}