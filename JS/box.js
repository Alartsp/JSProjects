var Box = (function() {
    var boxes = document.querySelector('.boxes');
    function initSwitch() {
        var boxBtn = document.querySelector('.header-box-btn');
        boxBtn.addEventListener('click', () => {
            if (boxes.classList.contains('boxes')) {
                boxes.classList.remove('boxes');
                boxBtn.innerHTML = 'In';
            } else {
                boxes.classList.add('boxes');
                boxBtn.innerHTML = 'Out';
            }
        });
    }
    function initMove() {
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

    function hide() {
        boxes.style.display = 'none';
    }

    function show() {
        boxes.style.display = '';
    }

    function initBoxModule() {
        initSwitch();
        initMove();
    }
    return {
        init: initBoxModule,
        hide: hide,
        show: show
    }
})()