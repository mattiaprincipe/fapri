let toggleBtn = document.querySelector('.menu-toggle');
let menu = document.querySelector('.menu');
let menuLink = document.querySelector('.link');
let linea1 = document.querySelector('#line1');
let linea2 = document.querySelector('#line2');
let linkList = document.querySelectorAll('.inner-link');
let logo = document.querySelector('.logo');
let alphaBg = document.querySelector('.alphaBg');

toggleBtn.addEventListener('click', apriMenu);
toggleBtn.addEventListener('click', apriMenu);

function apriMenu(){
    menu.classList.toggle('menuchiuso');
    menu.classList.toggle('menuaperto');
    alphaBg.classList.toggle('alphaBgOpen')
    menuLink.classList.toggle('linkaperto');
    linea1.classList.toggle('lineruotata1');
    linea2.classList.toggle('lineruotata2');
    toggleBtn.classList.toggle('chiudimenu');
    logo.classList.toggle('logorosso');
    for (let i=0 ; i < linkList.length; i++){
        setTimeout(() => {linkList[i].classList.toggle('movelink');
        },100 * i);
    }
    for (let i=0 ; i < linkList.length; i++){
        setTimeout(() => {linkList[i].classList.toggle('fadelink');
        },100 * i);
    }

    
}
