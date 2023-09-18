import './style.css';
import BreakfastImage from './assets/breakfastImage.jpeg';

function renderBreakfast() {
    const breakfast = document.createElement('div');
    breakfast.classList.toggle('page');

    const itemText = document.createElement('h1');
    itemText.classList.toggle('itemText');
    itemText.textContent = "Breakfast Item: Crepes"
    breakfast.appendChild(itemText);

    const itemImage = new Image();
    itemImage.src = BreakfastImage;
    itemImage.classList.toggle('image');
    breakfast.appendChild(itemImage);

    return breakfast;
}

export default renderBreakfast;