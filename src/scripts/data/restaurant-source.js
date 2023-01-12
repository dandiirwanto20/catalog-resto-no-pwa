import API_ENDPOINT from '../global/api-endpoint';
// import CONFIG from '../global/config';

class RestaurantSource {
  // Mengambil data list restaurant Web API Dicoding
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    return response.json();
  }

  // Mengambil data detail restaurant dari Web API Dicoding
  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    // console.log(id, response);
    return response.json();
  }

  // Mengambil data review restaurant dari Web API Dicoding
  // static async postRestaurant(data) {
  //   const rawResponse = await fetch(API_ENDPOINT.POST_REVIEW, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   return rawResponse;
  // }
}

export default RestaurantSource;
