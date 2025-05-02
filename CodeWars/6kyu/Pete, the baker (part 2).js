// Pete is now mixing the cake mixture. He has the recipe, containing the required ingredients for one cake. He also might have added some of the ingredients already, but something is missing. Can you help him to find out, what he has to add to the mixture?

// Requirements:

// Pete only wants to bake whole cakes. And ingredients, that were added once to the mixture, can't be removed from that. That means: if he already added the amount of flour for 2.8 cakes, he needs to add at least the amount of flour for 0.2 cakes, in order to have enough flour for 3 cakes.
// If Pete already added all ingredients for an integer amount of cakes, you don't need to add anything, just return an empty hash then.
// If Pete didn't add any ingredients at all, you need to add all ingredients for exactly one cake.
// For simplicity we ignore all units and just concentrate on the numbers. E.g. 250g of flour is simply 250 (units) of flour and 1 lb of sugar is also simply 1 (unit) of sugar.
// Ingredients, which don't have to be added to the mixture (missing amount = 0), must not be present in the result.
// Examples:

// var recipe = {flour: 200, eggs: 1, sugar: 100};

// getMissingIngredients(recipe, {flour: 50, eggs: 1}); // must return {flour: 150, sugar: 100}
// getMissingIngredients(recipe, {}); // must return {flour: 200, eggs: 1, sugar: 100}
// getMissingIngredients(recipe, {flour: 500, sugar: 200}); // must return {flour: 100, eggs: 3, sugar: 100}


//Code wars solution from the comunity with my own slight adjustmenths

function getMissingIngredients(recipe, added) {
    const needed = {};
    
    let numCakes = 1, cakes
    
    for (ing in recipe) {
      if (ing in added) {
        cakes = Math.ceil(added[ing] / recipe[ing]);
        numCakes = cakes > numCakes ? cakes : numCakes;
      }
    }
    
    for (ing in recipe) {
      if (!(ing in added)) needed[ing] = recipe[ing] * numCakes;
      if (recipe[ing] * numCakes - added[ing])
        needed[ing] = recipe[ing] * numCakes - added[ing];
    }
    
    return needed;
  }

//Code wars solution My analysis/breakdown

function getMissingIngredients(recipe, added) {
    //creating an obj to hold what is missing
    const needed = {};
    
    //we create a var with default of 1 to indicate how many cake we will need and I added the declaration for cakes to be use in our loop later
    let numCakes = 1, cakes
    
    //we are going through the recipe ingredients to check how many cakes we are currently at
    for (key in recipe) {
        //if the key from recipe is included in added we may proceed to check the amount of cakes that have been done thus far, if there isent we dont bother checking as it would mean that numCake would be by defaul the amount of cakes we need to make any how
      if (key in added) {
        //we find the ammount of cakes with decimals that tell us the amount of cake pete has prept for and we then round up to find the target cakes we are thus aiming to reach 
        cakes = Math.ceil(added[key] / recipe[key]);
        //we check and update teh assigned numCakes, if cakes ends up bein larget the numCakes then numCakes takes cakes value otherwise numcakes keeps its last value
        numCakes = cakes > numCakes ? cakes : numCakes;
      }
    }
    
    //we now loop through the recipe to find out how much we need to add to end up with only hole cakes
    for (key in recipe) {

        //we check if the recipe key is in added obj if not we create new property key indicatingwhat is missing to maek naother hole the total amount of hole cakes
      if (!(key in added)) {
        //we do recipe * numCakes to get the total ingredients
        needed[key] = recipe[key] * numCakes;
    }

        //we then check if the needed ingredients for amount of cake minus added reaches 0(which would mean that there is no need to add more) or if there is an ammount left to make a hole cake if yes we add the needed value to the key that had been create prior
      if (recipe[key] * numCakes - added[key])
        //this give ammount needed by calculating the total needed minus the already added
        needed[key] = recipe[key] * numCakes - added[key];
    }
    
    //we return said obj
    return needed;
  }