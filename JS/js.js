$(".light_on").click(function() {
    $("header").css("background-image", "");
});

$(".light_off").click(function() {
    $("header").css("background-image", "none");
    $(".boxes").css("display", "none");
});

$(".box_on").click(function() {
    $(".boxes").css("display", "");
});

$(".box_off").click(function() {
    $(".boxes").css("display", "none");
});

$(".light_on_under").click(function() {
    $("main").css("background-image", "");
});

$(".light_off_under").click(function() {
    $("main").css("background-image", "none");
});


var arr = [{id: "1"}, {id: "2"}, {id: "3"}];
var ul = document.querySelector(ul);
for (var i=0; i < arr.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = arr[i].id;
    ul.appendChild(li);
}


var arr = [
    {name: 'div1', width: '50px', height:'50px', backgroundColor: 'red'},
    {name: 'div2', width: '50px', height:'50px', backgroundColor: 'blue'},
    {name: 'div3', width: '50px', height:'50px', backgroundColor: 'green'},
    {name: 'div4', width: '50px', height:'50px', backgroundColor: 'white'}
    ]
var ul_el = document.querySelector('.massive > ul');
var li_el1 = document.createElement('li');
var li_el2 = document.createElement('li');
var li_el3 = document.createElement('li');
var li_el4 = document.createElement('li');
li_el1.style.cssText = 'width: 200px; height: 200px; background-color: red;';
li_el2.style.cssText = 'width: 200px; height: 200px; background-color: blue;';
li_el3.style.cssText = 'width: 200px; height: 200px; background-color: green;';
li_el4.style.cssText = 'width: 200px; height: 200px; background-color: white;';
ul_el.appendChild(li_el1);
ul_el.appendChild(li_el2);
ul_el.appendChild(li_el3);
ul_el.appendChild(li_el4);

var ul = document.querySelector('.massive > ul');
var li = document.createElement('li');
ul.appendChild(li);



