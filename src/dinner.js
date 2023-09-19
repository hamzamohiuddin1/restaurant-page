import './style.css';
import DinnerImage from './assets/dinnerImage.jpeg';

function renderDinner() {
    const dinner = document.createElement('div');
    dinner.classList.toggle('page');

    const itemText = document.createElement('h1');
    itemText.classList.toggle('itemText');
    itemText.textContent = "Dinner Item: Steak"
    dinner.appendChild(itemText);

    const itemImage = new Image();
    itemImage.src = DinnerImage;
    itemImage.classList.toggle('image');
    dinner.appendChild(itemImage);

    return dinner;
}

export default renderDinner;