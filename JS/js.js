function createElement(domItem) {
    var li = document.createElement("li");
    li.innerHTML = domItem.name;
    li.style.width = domItem.width;
    li.style.height = domItem.height;
    li.style.backgroundColor = domItem.backgroundColor;
    return li;
}

document.querySelector(".light_upper_btn").addEventListener('click', () => {
    if(document.querySelector('header').classList.contains('header_on')){
    document.querySelector('header').classList.remove('header_on');
    document.querySelector('header').classList.add('header_light_off');
    document.querySelector('.light_upper_btn').innerHTML = 'On';
    document.querySelector('header > div:nth-child(3)').style.display = 'none';
    document.querySelector('.frame').style.display = 'none';
    document.querySelector('.slider').style.display = 'none';
} else {
    document.querySelector('header').classList.remove('header_light_off');
    document.querySelector('header').classList.add('header_on');
    document.querySelector('.light_upper_btn').innerHTML = 'Off';
    document.querySelector('header > div:nth-child(3)').style.display = '';
    document.querySelector('.frame').style.display = '';
    document.querySelector('.slider').style.display = '';
}});

document.querySelector(".box_btn").addEventListener('click', () => {
if(document.querySelector('header > div:nth-child(3)').classList.contains('boxes')){
    document.querySelector('header > div:nth-child(3)').classList.remove('boxes');
    document.querySelector('header > div:nth-child(3)').classList.add('boxes_off');
    document.querySelector('.box_btn').innerHTML = 'In';
} else {
    document.querySelector('header > div:nth-child(3)').classList.remove('boxes_off');
    document.querySelector('header > div:nth-child(3)').classList.add('boxes');
    document.querySelector('.box_btn').innerHTML = 'Out';
}});

document.querySelector(".light_under_btn").addEventListener('click', () => {
    if(document.querySelector('main').classList.contains('main_on')){
    document.querySelector('main').classList.remove('main_on');
    document.querySelector('main').classList.add('main_light_off');
    document.querySelector('.light_under_btn').innerHTML = 'On';
} else {
    document.querySelector('main').classList.remove('main_light_off');
    document.querySelector('main').classList.add('main_on');
    document.querySelector('.light_under_btn').innerHTML = 'Off';
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


var i = 0;
$(document).ready(function()
{     $('body').keydown(function(event)
    {
            if (event.keyCode == 37 && i <= 6)
            {   i++;
                document.querySelector('.boxes').style.left = 350 - i*50 + 'px';
            }
            if (event.keyCode == 39 && i >= -24)
            {   i--;
                document.querySelector('.boxes').style.left = 350 - i*50 +'px';
            }
    });
});
