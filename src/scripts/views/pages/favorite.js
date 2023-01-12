import FavRestaurantIdb from '../../data/restaurant-idb';
import { restaurantItemTemplate } from '../templates/template-html';

const Favorite = {
  async render() {
    return `
    <div class="container">
      <h2 class="title-container">Your Favorite Restaurant</h2>
      <section id="list-rest"></section>
      </div>
    </div>
      `;
  },

  async afterRender() {
    const data = await FavRestaurantIdb.getAllRestaurants();
    const listContainer = document.querySelector('#list-rest');
    if (data.length === 0) {
      listContainer.innerHTML = `
        Tidak Ada Restaurant yang Di Sukai
      `;
    }
    const totalRest = data.length;
    data.forEach((restaurant, index) => {
      listContainer.innerHTML += restaurantItemTemplate(restaurant, index, totalRest);
    });
  },
};

export default Favorite;
