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

upperLightBtn.addEventListener('click', ()=>{
    if (header.classList.contains('header_on')) {
        header.classList.remove('header_on');
        header.classList.add('header_light_off');
        upperLightBtn.innerHTML = 'On';
        boxes.style.display = 'none';
        frame.style.display = 'none';
        slider.style.display = 'none';
    } else {
        header.classList.remove('header_light_off');
        header.classList.add('header_on');
        upperLightBtn.innerHTML = 'Off';
        boxes.style.display = '';
        frame.style.display = '';
        slider.style.display = '';
    }
}
);

document.querySelector(".box_btn").addEventListener('click', ()=>{
    if (boxes.classList.contains('boxes')) {
        boxes.classList.remove('boxes');
        boxes.classList.add('boxes_off');
        boxBtn.innerHTML = 'In';
    } else {
        boxes.classList.remove('boxes_off');
        boxes.classList.add('boxes');
        boxBtn.innerHTML = 'Out';
    }
}
);

underLightBtn.addEventListener('click', ()=>{
    if (main.classList.contains('main_on')) {
        main.classList.remove('main_on');
        main.classList.add('main_light_off');
        underLightBtn.innerHTML = 'On';
    } else {
        main.classList.remove('main_light_off');
        main.classList.add('main_on');
        underLightBtn.innerHTML = 'Off';
    }
}
);

//add div list
var arr = [{
    name: 'div1',
    width: '50px',
    height: '50px',
    backgroundColor: 'red'
}, {
    name: 'div2',
    width: '50px',
    height: '50px',
    backgroundColor: 'blue'
}, {
    name: 'div3',
    width: '50px',
    height: '50px',
    backgroundColor: 'green'
}, {
    name: 'div4',
    width: '50px',
    height: '50px',
    backgroundColor: 'white'
}];

// image slider
var images = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg'];
var num = 0;
function next() {
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}
var timerId = setInterval(function() {
    next();
}, 5000);

//moving boxes
var i = 0;
$(document).ready(function() {
    $('body').keydown(function(event) {
        if (event.keyCode == 37 && i <= 6) {
            i++;
            boxes.style.left = 350 - i * 50 + 'px';
        }
        if (event.keyCode == 39 && i >= -24) {
            i--;
            boxes.style.left = 350 - i * 50 + 'px';
        }
    });
});

var wineStandCatalog = [{
    name: 'stand01',
    image: 'images/catalog/wineStand1.jpg',
    price: '100$'
}, {
    name: 'stand02',
    image: 'images/catalog/wineStand2.jpg',
    price: '120$'
}, {
    name: 'stand03',
    image: 'images/catalog/wineStand3.jpg',
    price: '90$'
}, {
    name: 'stand04',
    image: 'images/catalog/wineStand4.jpg',
    price: '110$'
}, {
    name: 'stand05',
    image: 'images/catalog/wineStand5.jpg',
    price: '150$'
}, {
    name: 'stand06',
    image: 'images/catalog/wineStand6.jpg',
    price: '200$'
}, {
    name: 'stand07',
    image: 'images/catalog/wineStand7.jpg',
    price: '75$'
}, {
    name: 'stand08',
    image: 'images/catalog/wineStand8.jpg',
    price: '80$'
}, {
    name: 'stand09',
    image: 'images/catalog/wineStand9.jpg',
    price: '140$'
}, {
    name: 'stand10',
    image: 'images/catalog/wineStand10.jpg',
    price: '300$'
}, {
    name: 'stand11',
    image: 'images/catalog/wineStand11.jpg',
    price: '250$'
}];

function createElement(domItem) {
    var li = document.createElement("li");
    li.innerHTML = domItem.name;
    li.style.width = domItem.width;
    li.style.height = domItem.height;
    li.style.backgroundColor = domItem.backgroundColor;
    return li;
}

function addTable(wineStands) {
    //var table = document.createElement('table');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var div = document.createElement('div');
    var img = document.createElement('img');
    img.src = wineStands.image;
    //table.appendChild(tr);
    td1.innerHTML = wineStands.name;
    td2.appendChild(img);
    td3.innerHTML = wineStands.price;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    return tr;
}

var mainDiv = document.querySelector('main > div');
var table = document.createElement('table');
var th1 = document.createElement('th');
var th2 = document.createElement('th');
var th3 = document.createElement('th');
var trm = document.createElement('tr');
th1.innerHTML = 'Name';
th2.innerHTML = 'Photo';
th3.innerHTML = 'Price';
trm.appendChild(th1);
trm.appendChild(th2);
trm.appendChild(th3);
table.appendChild(trm);
for (var i = 0; i < wineStandCatalog.length; i++) {
    var tr = addTable(wineStandCatalog[i]);
    mainDiv.appendChild(table);
    table.appendChild(tr);
}

function addCatalog(wineStands) {
    var li = document.createElement("li");
    var div = document.createElement('div');
    var pName = document.createElement('p');
    var img = document.createElement('img');
    var pPrice = document.createElement('p');
    pName.innerHTML = wineStands.name;
    pPrice.innerHTML = wineStands.price;
    img.src = wineStands.image;
    li.appendChild(div);
    div.appendChild(pName);
    div.appendChild(img);
    div.appendChild(pPrice);
    return li;
}

var ul = document.createElement('ul');
for (var i = 0; i < wineStandCatalog.length; i++) {
    var li = addCatalog(wineStandCatalog[i]);
    mainDiv.appendChild(ul);
    ul.appendChild(li);
}

var changeStyleBtn = document.querySelector('.view_btn');
var mainTable = document.querySelector('.array > table');
var mainUl = document.querySelector('.array > ul');
mainTable.style.display = 'none';
mainUl.style.display = 'block';
changeStyleBtn.addEventListener('click', ()=>{
    var arrayDiv = document.querySelector('.array');
    if ((mainTable.style.display == 'none') && (mainUl.style.display == 'block')) {
        mainTable.style.display = 'table';
        mainUl.style.display = 'none';
    } else if ((mainTable.style.display == 'table') && (mainUl.style.display == 'none')){
        mainTable.style.display = 'none';
        mainUl.style.display = 'block';
    }
}
);

var upperMenu = [{
    name: 'About Us',
    url: '#'
}, {
    name: 'Our Focus',
    url: '#'
}, {
    name: 'Portfolio',
    url: '#'
}, {
    name: 'Our Team',
    url: '#'
}, {
    name: 'Work Steps',
    url: '#'
}, {
    name: 'Pricing',
    url: '#'
}, {
    name: 'Blog',
    url: '#'
}, {
    name: 'Contact',
    url: '#'
}];