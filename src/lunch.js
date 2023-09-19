import './style.css';
import LunchImage from './assets/lunchImage.jpeg';

function renderLunch() {
    const lunch = document.createElement('div');
    lunch.classList.toggle('page');

    const itemText = document.createElement('h1');
    itemText.classList.toggle('itemText');
    itemText.textContent = "Lunch Item: Burger"
    lunch.appendChild(itemText);

    const itemImage = new Image();
    itemImage.src = LunchImage;
    itemImage.classList.toggle('image');
    lunch.appendChild(itemImage);

    return lunch;
}

export default renderLunch;
