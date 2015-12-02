window.onload = function() {
  makelist();
  document.getElementById('dish-form').addEventListener('submit', addRecipe);
}

function makelist(){
  console.log("hi");
  var goodDishes, badDishes;
  var dishes = [
    "Roasted Brussels Sprouts",
    "Truffel Salt Burrito",
    "Vegan Philly Style Cheese Steak",
    "Fresh Brussels Sprouts Soup",
    "Split Pea Pizza with Cherry Tomatoes and Chocolate Shavings",
    "Brussels Sprouts with Toasted Breadcrumbs, Parmesan, and Lemon",
    "Cheesy Maple Roasted Brussels Sprouts and Broccoli with Dried Cherries",
    "Parmesan Toast with Green Onions and Thyme",
    "Hot Cheesy Roasted Brussels Sprout Dip",
    "Gazpacho with Lime and Potato Sauce",
    "Pomegranate Roasted Brussels Sprouts with Red Grapes and Farro",
    "Roasted Brussels Sprout and Red Potato Salad",
    "Smoked Gouda and Poppy Seed Crackers",
    "Smoky Buttered Brussels Sprouts",
    "Margherita Pizza with Mushrooms and Canteloupe",
    "Orange Glazed Vegan Chicken Cutlet",
    "Sweet and Spicy Roasted Brussels Sprouts",
    "Smoky Buttered Brussels Sprouts",
    "Jelly Bean Ice Cream",
    "Brussels Sprouts and Egg Salad with Hazelnuts"
    ]

  goodDishes = dishes.filter( function(dish) { return (/^.*Brussels Sprouts.*$/).test(dish) });
  badDishes = dishes.filter( function(dish) { return !(/^.*Brussels Sprouts.*$/).test(dish) });

  for( var i =  0 ; i < goodDishes.length ; i++) {
    var listRecipe = document.createElement("li");
    console.log(listRecipe);
    listRecipe.innerHTML = goodDishes[i];
    document.getElementsByTagName("ul")[0].appendChild(listRecipe);
    console.log(document.getElementsByTagName("ul")[0]);
  }

}

function addRecipe(evt) {
  evt.preventDefault();
  var new_recipe = this.dish_name.value;
  var listRecipe = document.createElement("li");
  listRecipe.innerHTML = new_recipe;
  document.getElementsByTagName("ul")[0].appendChild(listRecipe);
}

function Clear(obj) {
  return obj.value='';
}
