function createElement(domItem) {
    var li = document.createElement("li");
    li.innerHTML = domItem.name;
    li.style.width = domItem.width;
    li.style.height = domItem.height;
    li.style.backgroundColor = domItem.backgroundColor;
    return li;
}



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


var arr =  [
    {name: 'div1', width: '50px', height:'50px', backgroundColor: 'red'},
    {name: 'div2', width: '50px', height:'50px', backgroundColor: 'blue'},
    {name: 'div3', width: '50px', height:'50px', backgroundColor: 'green'},
    {name: 'div4', width: '50px', height:'50px', backgroundColor: 'white'}
];
var ul = document.querySelector('.array > ul');
for (var i=0; i < arr.length; i++) {
    var li = createElement(arr[i]);
    ul.appendChild(li);
}
//    var li = document.createElement("li");
//    li.innerHTML = arr[i].name;
//    li.style.width = arr[i].width;
//    li.style.height = arr[i].height;
//    li.style.backgroundColor = arr[i].backgroundColor;
//    ul.appendChild(li);




var li = createElement(arr[i]);
ul.appendChild(li);



var images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg'
];
var num = 0;
function next() {
    var slider = document.getElementsByClassName("slider")[0];
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementsByClassName("slider")[0];
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}
var timerId = setInterval(function() {
    next();
}, 5000);

