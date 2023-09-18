//Main tab
import './style.css';
import Logo from './assets/logo.jpeg';
import renderBreakfast from './breakfast.js';

const content = document.querySelector('#content');
const tabs = document.createElement('div');
tabs.classList.toggle('tabs');

const tabMap = {
    1: 'breakfast',
    2: 'lunch',
    3: 'dinner'
};

for (let i=0; i<3; i++) {
    let tab = document.createElement(`div`);
    tab.classList.toggle('tabBtn');
    tab.classList.toggle(tabMap[i+1]);
    tab.textContent = tabMap[i+1];
    tabs.appendChild(tab);

}
content.appendChild(tabs);

let index = document.createElement('div');
index.classList.toggle('page');

let welcomeText = document.createElement('h1');
welcomeText.classList.toggle('welcomeText');
welcomeText.textContent = "Welcome to Hamza's Restaurant!";
index.appendChild(welcomeText);

const logo = new Image();
logo.src = Logo;
logo.classList.toggle('image');
index.appendChild(logo);


content.appendChild(index);

for(let i=0;i<3;i++){
    let t = document.querySelector(`.${tabMap[i+1]}`);
    let breakfast = renderBreakfast();
    t.addEventListener('click', function() {
        let currentPage = document.querySelector('.page');
        content.removeChild(currentPage);
        content.appendChild(breakfast);
    });
}





