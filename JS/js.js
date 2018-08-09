function createElement(domItem) {
    var li = document.createElement("li");
    li.innerHTML = domItem.name;
    li.style.width = domItem.width;
    li.style.height = domItem.height;
    li.style.backgroundColor = domItem.backgroundColor;
    return li;
}

var header = document.querySelector('header');
var upperLightBtn = document.querySelector('.light_upper_btn');
var frame = document.querySelector('.frame');
var boxes = document.querySelector('header > div:nth-child(3)');
var slider = document.querySelector('.slider');
var boxBtn = document.querySelector('.box_btn');
var underLightBtn = document.querySelector(".light_under_btn");
var main = document.querySelector('main');

upperLightBtn.addEventListener('click', () => {
    if(header.classList.contains('header_on')){
        header.classList.remove('header_on');
        header.classList.add('header_light_off');
        upperLightBtn.innerHTML = 'On';
        boxes.style.display = 'none';
        frame.style.display = 'none';
        slider.style.display = 'none';
}   else {
        header.classList.remove('header_light_off');
        header.classList.add('header_on');
        upperLightBtn.innerHTML = 'Off';
        boxes.style.display = '';
        frame.style.display = '';
        slider.style.display = '';
}});

document.querySelector(".box_btn").addEventListener('click', () => {
    if(boxes.classList.contains('boxes')){
        boxes.classList.remove('boxes');
        boxes.classList.add('boxes_off');
        boxBtn.innerHTML = 'In';
}   else {
        boxes.classList.remove('boxes_off');
        boxes.classList.add('boxes');
        boxBtn.innerHTML = 'Out';
}});

underLightBtn.addEventListener('click', () => {
    if(document.querySelector('main').classList.contains('main_on')){
        main.classList.remove('main_on');
        main.classList.add('main_light_off');
        underLightBtn.innerHTML = 'On';
}   else {
        main.classList.remove('main_light_off');
        main.classList.add('main_on');
        underLightBtn.innerHTML = 'Off';
}});

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

var images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg'
];
var num = 0;
function next() {
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}
var timerId = setInterval(function() {
    next();
}, 5000);


var i = 0;
$(document).ready(function()
{     $('body').keydown(function(event)
    {
        if (event.keyCode == 37 && i <= 6)
        {   i++;
            boxes.style.left = 350 - i*50 + 'px';
        }
        if (event.keyCode == 39 && i >= -24)
        {   i--;
            boxes.style.left = 350 - i*50 +'px';
        }
    });
});
