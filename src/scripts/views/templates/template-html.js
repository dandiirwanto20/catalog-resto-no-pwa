/* eslint-disable indent */
import CONFIG from '../../global/config';

const restaurantItemTemplate = (restaurant, index, lastIndex) => {
  const firstBox = (numbIndex) => numbIndex === 0 && lastIndex % 2 !== 0;

  return `
  <div class="card ${firstBox(index) ? 'box-ganjil' : ''}">
    <a href="#/detail/${restaurant.id}">
      <div class="img-container">
        <img class="img-res lazyload" alt="image ${
          restaurant.name
        }" src="./images/placeholder-large.jpg" data-src="${
    restaurant.pictureId
      ? CONFIG.BASE_IMAGE_URL_SM + restaurant.pictureId
      : 'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg'
  }" crossorigin="anonymous"/>
        <span class="card-title"><p>${restaurant.name} - ${restaurant.city}</p></span>
        <span class="card-rating">
          <i title="ratings" class="fa fa-star"></i>
          <span>${restaurant.rating}</span>
        </span>
      </div>
      <div class="card-content">
          <p class="card-content-title">Description :</p>
          <p class="truncate${firstBox(index) ? '2' : ''}">${restaurant.description}</p>
      </div>
    </a>
  </div>
  `;
};

const createSkeletonItemTemplate = (count) => {
  const firstBox = (numbIndex) => numbIndex === 0 && count % 2 !== 0;
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="card ${firstBox(i) ? 'box-ganjil' : ''}">
      <div class="img-container">
        <img class="img-res" alt="image skeleton" src="./images/placeholder-large.jpg"
        srcset="./images/placeholder-small.jpg 480w, ./images/placeholder-large.jpg 800w"
        sizes="(max-width: 600px) 480px, 800px" crossorigin="anonymous"/>
        <span class="card-title"><p>Title - City</p></span>
        <span class="card-rating">
          <i title="ratings" class="fa fa-star"></i>
          <span>5</span>
        </span>
      </div>
      <div class="card-content">
          <p class="card-content-title">Description :</p>
          <p class="truncate${
            firstBox(i) ? '2' : ''
          }">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi ullam ad mollitia cupiditate aut iure officia, voluptate, sapiente modi quisquam est quod quas recusandae quo saepe atque nisi blanditiis.</p>
      </div>
    </div>
  `;
  }
  return template;
};

const restaurantDetailTemplate = (detail) => `
  <div class="detail">
    <div>
      <div>
        <img class="img-res2" alt="image ${detail.name}" src="${
  CONFIG.BASE_IMAGE_URL + detail.pictureId
}" crossorigin="anonymous"/>
      </div>
    </div>
    <ul class="detail-info">
      <li><span><i title="restaurant" class="fa fa-store"></i>&emsp;${detail.name}</span></li>
      <li><span><i title="address" class="fa fa-map-marker-alt"></i>&emsp;${detail.address}, ${
  detail.city
}</span></li>
      <li><span><i title="ratings" class="fa fa-star"></i>&emsp;${detail.rating}</span></li>
      <li><p class="truncate2">Description: ${detail.description}</p></li>
      <li>${detail.categories
        .map(
          (category) => `
            <span class="category">${category.name}</span>
          `,
        )
        .join('')}
      </li>
    </ul>
    <h3>Menu</h3>
    <div class="detail-menu grid-2">
      <div class="detail-food">
        <h4>Food</h4>
        <ul>
          ${detail.menus.foods
            .map(
              (food) => `
                <li>${food.name}</li>
              `,
            )
            .join('')}
        </ul>
      </div>
      <div class="detail-drink">
        <h4>Drink</h4>
        <ul>
          ${detail.menus.drinks
            .map(
              (drink) => `
                <li>${drink.name}</li>
              `,
            )
            .join('')}
        </ul>
      </div>
    </div>
  </div>
`;

export { restaurantItemTemplate, createSkeletonItemTemplate, restaurantDetailTemplate };
