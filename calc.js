var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var result1 = document.getElementById("result1");
var form = document.getElementById('form');


form.addEventListener('submit', function(event) {
  if (!numField1.value || !numField2.value){
    alert("there is no value");
  }else{
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);

    var result = x/y*100;

    result1.innerText = " the answer is: " + result + " %";
    event.preventDefault();


  }
});
