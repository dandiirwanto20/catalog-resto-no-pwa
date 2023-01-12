/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const assert = require('assert');

Feature('Favorite Restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = "Tidak Ada Restaurant yang Di Sukai";

Scenario('showing empty favorite restaurant', (I) => {
  I.seeElement('#list-rest');
  I.see(firstCondition, '#list-rest');
});

Scenario('liking one restaurant', async (I) => {
  I.see(firstCondition, '#list-rest');

  I.amOnPage('/');

  I.seeElement('.card a');
  const firstCard = locate('.card-title').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedCardTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async (I) => {
  I.see(firstCondition, '#list-rest');

  I.amOnPage('/');

  // melihat card restaurant pertama dan mengkliknya ke detail
  I.seeElement('.card a');
  const firstCard = locate('.card-title').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  // melike restaurant di detail
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman favorite dan membandingakan dg restaurant yg diklik
  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedCardTitle = await I.grabTextFrom('.card-title');
  assert.strictEqual(firstCardTitle, likedCardTitle);

  // klik card restaurant yg ada di favorite
  I.click(likedCardTitle);

  // unlike restaurant yang ada di favorite
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav
  I.amOnPage('/#/favorite');
  I.seeElement('#list-rest');
  const noFavRestaurant = await I.grabTextFrom('#list-rest');

  // mengecek halaman fav dan berhasil menghapus (unlike)
  assert.strictEqual(noFavRestaurant, firstCondition);
});

Scenario('Customer review', async (I) => {
  I.see(firstCondition, '#list-rest');

  I.amOnPage('/');

  I.seeElement('.card a');
  I.click(locate('.card a').first());

  I.seeElement('.form-review form');

  const textReview = 'Review from E2E testing';
  I.fillField('inputName', 'Dandi Irwanto');
  I.fillField('inputReview', textReview);

  I.click('#submit-review');

  const lastReview = locate('.review-body').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(textReview, textLastReview);
});
