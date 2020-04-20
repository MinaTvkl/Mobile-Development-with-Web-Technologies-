document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'home') {
        page.querySelector('#about-button').onclick = function () {
            document.querySelector('#myNavigator').pushPage('about.html', { data: { title: 'About' } });
        };
        page.querySelector('#push-button3').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page3.html', { data: { title: 'Feet' } });
        };
        page.querySelector('#push-button4').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page4.html', { data: { title: 'Shoulders' } });
        };
        page.querySelector('#push-button5').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page5.html', { data: { title: 'Face' } });
        };
    } else if (page.id === 'page2') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});