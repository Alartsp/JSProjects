var service = (function() {
    function getCatalogData() {
        var data = [{
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
        return data;
    }

    function getImages() {
        var data = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg'];
        return data;
    }

    function getUpperMenuData() {
        var data = [{
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
        return data;
    }

    return {
        getCatalogData: getCatalogData,
        getImagesData: getImages,
        getUpperMenuData: getUpperMenuData
    }
})();

/*function getCatalogData() {
    var data = [{
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

    return data;
}*/
