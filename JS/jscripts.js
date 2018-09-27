var num = 0;
var boxes = document.querySelector('header > div:nth-child(3)');
var slider = document.querySelector('.slider');

UpLightSwitch();
UnderLightSwitch();
BoxSwitch();
BoxMoving();
sliderNext();
sliderPrev();
autoSlider();
tableCreation();
listCreation();
chViewBtn();

function UpLightSwitch() {
    var upperLightBtn = document.querySelector('.light_upper_btn');
    upperLightBtn.addEventListener('click', () => {
        var header = document.querySelector('header');
        var frame = document.querySelector('.frame');
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
    });
}

function UnderLightSwitch() {
    var underLightBtn = document.querySelector(".light_under_btn");
    underLightBtn.addEventListener('click', () => {
        var main = document.querySelector('main');
        if (main.classList.contains('main_on')) {
            main.classList.remove('main_on');
            main.classList.add('main_light_off');
            underLightBtn.innerHTML = 'On';
        } else {
            main.classList.remove('main_light_off');
            main.classList.add('main_on');
            underLightBtn.innerHTML = 'Off';
        }
    });
}

function BoxSwitch() {
    var boxBtn = document.querySelector('.box_btn');
    boxBtn.addEventListener('click', () => {
        if (boxes.classList.contains('boxes')) {
            boxes.classList.remove('boxes');
            boxes.classList.add('boxes_off');
            boxBtn.innerHTML = 'In';
        } else {
            boxes.classList.remove('boxes_off');
            boxes.classList.add('boxes');
            boxBtn.innerHTML = 'Out';
        }
    });
}

function BoxMoving() {
    var i = 0;
    document.body.addEventListener('keydown', () => {
        event.preventDefault();
        if (event.keyCode == 37 && i <= 6) {
            i++;
            boxes.style.left = 350 - i * 50 + 'px';
        }
        if (event.keyCode == 39 && i >= -24) {
            i--;
            boxes.style.left = 350 - i * 50 + 'px';
        }
    });
}

function sliderNext() {
    var nextBtn = document.querySelector('.next');
    nextBtn.addEventListener('click', () => {
        var data = service.getImages();
        num++;
        if (num >= data.length) {
            num = 0;
        }
        slider.src = data[num];
    });
}

function sliderPrev() {
    var prevBtn = document.querySelector('.prev');
    prevBtn.addEventListener('click', () => {
        var data = service.getImages();
        num--;
        if (num < 0) {
            num = data.length - 1;
        }
        slider.src = data[num];
    });
}

function autoSlider() {
    function autoNext() {
        var data = service.getImages();
        num++;
        if (num >= data.length) {
            num = 0;
        }
        slider.src = data[num];
    }
    let timerId = setInterval(autoNext, 2000);
}

function tableCreation() {
    var data = service.getCatalogData();

    function addTable(wineStands) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var div = document.createElement('div');
        var img = document.createElement('img');
        img.src = wineStands.image;
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
    for (var i = 0; i < data.length; i++) {
        var tr = addTable(data[i]);
        mainDiv.appendChild(table);
        table.appendChild(tr);
    }
}

function listCreation() {
    var data = service.getCatalogData();
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
    var mainDiv = document.querySelector('main > div');
    var ul = document.createElement('ul');
    for (var i = 0; i < data.length; i++) {
        var li = addCatalog(data[i]);
        mainDiv.appendChild(ul);
        ul.appendChild(li);
    }
}

function chViewBtn() {
    var changeStyleBtn = document.querySelector('.view_btn');
    var mainTable = document.querySelector('.array > table');
    var mainUl = document.querySelector('.array > ul');
    mainTable.style.display = 'none';
    mainUl.style.display = 'block';
    changeStyleBtn.addEventListener('click', () => {
        var arrayDiv = document.querySelector('.array');
        if ((mainTable.style.display == 'none') && (mainUl.style.display == 'block')) {
            mainTable.style.display = 'table';
            mainUl.style.display = 'none';
        } else if ((mainTable.style.display == 'table') && (mainUl.style.display == 'none')){
            mainTable.style.display = 'none';
            mainUl.style.display = 'block';
        }
    });
}
