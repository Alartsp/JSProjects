var num = 0;
//var boxes = document.querySelector('header > div:nth-child(3)');
var slider = document.querySelector('.slider');
var mainContent = document.querySelector('.main-content > div');

headerLightSwitch();
mainLightSwitch();
Box.init();
sliderNext();
sliderPrev();
autoSlider();
tableCreation();
listCreation();
chViewBtn();

function headerLightSwitch() {
    var headerContentBg = document.querySelector('.header-content-bg');
    var headerLightBtn = document.querySelector('.header-light-btn');
    headerLightBtn.addEventListener('click', () => {
        if (headerContentBg.classList.contains('header-content-bg')) {
            headerContentBg.classList.remove('header-content-bg');
            headerLightBtn.innerHTML = 'On';
            headerContentBg.style.display = 'none';
        } else {
            headerContentBg.classList.add('header-content-bg');
            headerContentBg.style.display = '';
            headerLightBtn.innerHTML = 'Off';
        }
    });
}

function mainLightSwitch() {
    var mainLightBtn = document.querySelector('.main-light-btn');
    var mainContentBg = document.querySelector('.main-content-bg');
    mainLightBtn.addEventListener('click', () => {
        if (mainContentBg.classList.contains('main-content-bg')) {
            mainContentBg.classList.remove('main-content-bg');
            mainContentBg.style.display = 'none';
            mainLightBtn.innerHTML = 'On';
        } else {
            mainContentBg.classList.add('main-content-bg');
            mainContentBg.style.display = '';
            mainLightBtn.innerHTML = 'Off';
        }
    });
}

function sliderNext() {
    var nextBtn = document.querySelector('.next');
    nextBtn.addEventListener('click', () => {
        var data = service.getImagesData();
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
        var data = service.getImagesData();
        num--;
        if (num < 0) {
            num = data.length - 1;
        }
        slider.src = data[num];
    });
}

function autoSlider() {
    function autoNext() {
        var data = service.getImagesData();
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
        mainContent.appendChild(table);
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
    var ul = document.createElement('ul');
    for (var i = 0; i < data.length; i++) {
        var li = addCatalog(data[i]);
        mainContent.appendChild(ul);
        ul.appendChild(li);
    }
}

function chViewBtn() {
    var changeStyleBtn = document.querySelector('.main-change-view-btn');
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
