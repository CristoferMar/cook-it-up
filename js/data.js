/* exported data */
var data = {
  currentDB: 'Meals',
  currentPage: 'searched',
  currentRecipe: {},
  searchedMeals: [],
  searchedDrinks: [],
  bookmarkedMeals: [],
  bookMealThumbs: [],
  lovedMeals: [],
  lovedMealThumbs: [],
  bookmarkedDrinks: [],
  bookDrinkThumbs: [],
  lovedDrinks: [],
  lovedDrinkThumbs: []
};

var oldDataJSON = localStorage.getItem('cookItUpData');
if (oldDataJSON !== null) {
  data = JSON.parse(oldDataJSON);
}

window.addEventListener('visibilitychange', event => {
  if (document.visibilityState !== 'visible') {
    var dataJSON = JSON.stringify(data);
    localStorage.setItem('cookItUpData', dataJSON);
  }
});
