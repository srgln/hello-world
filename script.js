//проверка чекбокса (выбран/не выбран)
function fun1() {
    var chbox;
    chbox = document.getElementById('one');
    if (chbox.checked) {
        alert('выбран');
    }
    else {
        alert('не выбран');
    }
}

//проверка радин (какой элемент выбран)
function fun2() {
    var radi = document.getElementsByName('r1');
    for (var i = 0; i < radi.length; i++) {
        if (radi[i].checked) {
            alert('выбран ' + i + ' элемент')
        }
    }
}

//выпадающий список
function fun3() {
    var sel = document.getElementById('mySelect').selectedIndex;
    var options = document.getElementById('mySelect').options;
    alert('выбрана опция ' + options[sel].text);
}

//значение ползунка
function fun4() {
    var rng = document.getElementById('r2');
    var i1 = document.getElementById('i1');
    i1.value = rng.value;
}

//связь значения ползунка и div
function fun5() {
    var rng = document.getElementById('r3');
    var div = document.getElementById('test');
    div.style.width = rng.value + 'px';
    div.style.height = rng.value + 'px';
}

//наглядное скругление углов
function fun6() {
    var rtl = document.getElementById('rtl').value;
    var ttl = document.getElementById('ttl');
    var rtr = document.getElementById('rtr').value;
    var ttr = document.getElementById('ttr');
    var rbr = document.getElementById('rbr').value;
    var tbr = document.getElementById('tbr');
    var rbl = document.getElementById('rbl').value;
    var tbl = document.getElementById('tbl');

    var block = document.getElementById('block');

    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px ';
}

//выпадающее меню
document.getElementById('nav').onmouseover = function (event) {
    var target = event.target;
    if (target.className == 'menu-item') {
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
}

document.onmouseover = function (event) {
    var target = event.target;
    console.log(event.target);
    if (target.className != 'menu-item' && target.className != 'submenu') {
        closeMenu();
    }
}

function closeMenu() {
    var menu = document.getElementById('nav');
    var subm = document.getElementsByClassName('submenu');
    for (var i = 0; i < subm.length; i++) {
        subm[i].style.display = 'none';
    }
}

//табы
var tab;
var tabContent;

window.onload = function () {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function (event) {
    var target = event.target;
    if (target.className == 'tab') {
        for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}
function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

//модальное окно
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//анимация
function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        }
        else {
            pos++;
            elem.style.top = pos + 'px'
            elem.style.left = pos + 'px'
        }
    }
}

//слайдер
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//поиск из списка
function myFunction(){
    var input,filter,ul,li,a,i;
    input=document.getElementById('myInput');
    filter=input.value.toUpperCase();
    ul=document.getElementById("myUl");
    li=ul.getElementsByTagName('li');

    for (i=0;i<li.length;i++){
        a=li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter)>-1){
            li[i].style.display="";
        }
        else{
            li[i].style.display="none";
        }
    }
}