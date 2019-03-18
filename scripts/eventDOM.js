let mealFinal = "";
let vegetarianFinal = "";

// Track which button user clicks and return the result.
function getUserInput() {
    document.getElementById('breakfast').addEventListener('click', function () {
        mealFinal = "breakfast";
        console.log(mealFinal);
    });
    document.getElementById('lunch').addEventListener('click', function () {
        mealFinal = "lunch";
        console.log(mealFinal);
    });
    document.getElementById('dinner').addEventListener('click', function () {
        mealFinal = "dinner";
        console.log(mealFinal);
    });
    document.getElementById('dessert').addEventListener('click', function () {
        mealFinal = "dessert";
        console.log(mealFinal);
    });
    document.getElementById('is-vegetarian').addEventListener('click', function () {
        vegetarianFinal = "%2Cvegetarian";
        console.log(vegetarianFinal);
    });
    document.getElementById('not-vegetarian').addEventListener('click', function () {
        vegetarianFinal = "";
        console.log(vegetarianFinal);
    });
    document.getElementById('dairy-free').addEventListener('click', function () {
        vegetarianFinal = "%2C+dairy+free";
        console.log(vegetarianFinal);
    });
    document.getElementById('gluten-free').addEventListener('click', function () {
        vegetarianFinal = "%2C+gluten+free";
        console.log(vegetarianFinal);
    });
    document.getElementById('vegan').addEventListener('click', function () {
        vegetarianFinal = "%2Cvegan";
        console.log(vegetarianFinal);
    });
}

getUserInput();

////////////////////////////////////////////////////////////////
//////////////////////// SUBMIT BUTTON ////////////////////////
////////////////////////////////////////////////////////////////

// Submit Button DOM
const submitButton = document.querySelector("[data-submitButton]");
const nav = document.querySelector('[data-nav]');
const recipeContainer = document.querySelector('[data-recipeContainer]');
// After User selects meal and diet, when clicking submit, it takes in the values and calls Recipe API
function submitButtonRetrieve() {
    retrieveData(getRelevantData(mealFinal, vegetarianFinal));
    console.log(`Test. ${mealFinal} Test. ${vegetarianFinal}`)
    // setRecipeImage(); MOVED TO SECOND THEN STATEMENT IN RETRIEVE DATA ------ DELETE THIS LINE
    nav.classList.toggle('hide');
    recipeContainer.classList.toggle('show');
}

// submitButton Event Listener
submitButton.addEventListener("click", submitButtonRetrieve);

// Adds toggle class to hid nav

////////////////////////////////////////////////////////////////
///////////////////////////  RECIPE  ///////////////////////////
////////////////////////////////////////////////////////////////

// recipeImage = recipe image DOM
const recipeImage = document.querySelector("[data-recipeIMG]");

// setRecipeImage function sets the src of the recipeImage DOM to the image of the recipe
function setRecipeImage(){
    recipeImage.src = cleanRecipeInfo[5]; // NOTE CHANGE 0 TO ELEMENT WITH IMAGE SOURCE
}

// recipeDOMS
function displayRecipeInformation(){
    const recipeName = document.querySelector("[data-rName]");
    const recipeServings = document.querySelector("[data-rServings]");
    const recipeIngredients = document.querySelector("[data-rIngredients]");
    const recipeInstructions = document.querySelector("[data-rInstructions]");

    const nameElement = document.createElement('h3');
    nameElement.textContent = cleanRecipeInfo[4];
    recipeName.appendChild(nameElement);
    recipeServings.textContent= 'Serves '+cleanRecipeInfo[2]

    
    cleanRecipeInfo[0].forEach(function (ingredient){
        const ingredientElement = document.createElement('p');
        ingredientElement.textContent = ingredient;
        recipeIngredients.appendChild(ingredientElement);
    });
    
    // const instructionElement = document.createElement('p');
    const recipeInfoInstructions = cleanRecipeInfo[3];
    const cleanRecipeInfoSplit = recipeInfoInstructions.split('.')
    cleanRecipeInfoSplit.pop();
    console.log(cleanRecipeInfoSplit);
    cleanRecipeInfoSplit.forEach(function(sentence){
        const listElement = document.createElement('li');
        listElement.textContent = sentence; 
        recipeInstructions.appendChild(listElement);
    })
    // instructionElement.textContent = cleanRecipeInfo[3];
    // recipeInstructions.appendChild(instructionElement);
}


//////////////////////////////////////////////////////////////////////////////////
////////////////////////// Nutrition button function ////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/// Nutrition button should retrieve nutritional info from array and pass it on to
/// fetch nutrition. Nutrition button on click Should run this function. 
function passNutInfo() {
    fetchNutrition(cleanRecipeInfo[1]);
    nutritionContainer.classList.toggle('show');
    // NutInfo.textContent = `Calories: ${totalCalories} Trans Fats: ${totalTFat} Saturated Fat: ${totalSFat} Cholesterol: ${totalCholesterol} Sodium: ${totalSodium} Carbohydrates: ${totalCarbohydrates} Fiber: ${totalDFiber} Sugar: ${totalSugar} Protein: ${totalProtein} Potassium: ${totalPotassium}`;
}

///Function sets text content of nut info to blank and adds event listener to Nut Button. Upon clicking
///Nut button, fetch nutrition function will run and make api call and will add variables

const NutInfo = document.querySelector('[nut-info]');
const NutButton = document.querySelector('[nut-button]');
NutButton.addEventListener('click', passNutInfo);
const nutritionContainer = document.querySelector('[data-nutritionContainer]');

// Adds nutritional info paragraph divs 
function drawNutritionLabel(){
  let servingsDivider = cleanRecipeInfo[2]
  const NutAmount=  document.querySelector('[nut-amount]');
  let nutritionLabelArray = [ (totalCalories/servingsDivider).toFixed(0), 
    (totalTFat/servingsDivider).toFixed(1), 
    (totalSFat/servingsDivider).toFixed(1),
    (totalCholesterol/servingsDivider).toFixed(1),
    (totalSodium/servingsDivider).toFixed(1),
    (totalCarbohydrates/servingsDivider).toFixed(1),
    (totalDFiber/servingsDivider).toFixed(1),
    (totalSugar/servingsDivider).toFixed(1),
    (totalProtein/servingsDivider).toFixed(1),
    (totalPotassium/servingsDivider).toFixed(1)
];
// for each item in nutritional info array create child paragraph
  nutritionLabelArray.forEach(function(nutrient){
      const anchorElement = document.createElement('div')
      anchorElement.textContent = nutrient;
      NutAmount.appendChild(anchorElement);

  });
}

//////////////////////////////////////////////////////////////////////////
//////////////////// Not button Function ////////////////////////////////
////////////////////////////////////////////////////////////////////////
const notButton = document.querySelector('[not-button]');

notButton.addEventListener('click', retrieveNewData);
function retrieveNewData() {
    const recipeName = document.querySelector("[data-rName]");
    const recipeIngredients = document.querySelector("[data-rIngredients]");
    const recipeInstructions = document.querySelector("[data-rInstructions]");
    ///Resets recipe info and loads new recipe info///
    recipeName.textContent= '';
    recipeIngredients.textContent= '';
    recipeInstructions.textContent= '';
    recipeImage.src = '';
    retrieveData(getRelevantData(mealFinal, vegetarianFinal));
    const NutAmount = document.querySelector('[nut-amount]')
    ///Sets nutritional info to blank whenever new recipe data is generated/////
    NutAmount.textContent ='';
    nutritionContainer.classList.remove('show');

    console.log(`Test. ${mealFinal} Test. ${vegetarianFinal}`);
}

////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// I don't want to cook, show me Restaurants ////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
const restLocations = document.querySelector("[data-restLocations]");
const restContainer = document.querySelector("[data-restContainer]");
const restButton = document.querySelector("[data-restaurantButton]");
const restButton2 = document.querySelector("[data-restaurantButton2]");

restButton.addEventListener("click", function (){
    getLocation();
    restContainer.classList.toggle("show");
});
restButton2.addEventListener("click", function (){
    getLocation();
    restContainer.classList.toggle("show");
});

function displayRestaurants(){

    for(let i = 0; i < 10; i++){
        const newDiv = document.createElement('div');
        const restName = document.createElement('h4');
        const restAdd = document.createElement('p');
        const restRate = document.createElement('p');
        const iconDiv = document.createElement('span');
        const restPic = document.createElement('a');
        const camIcon = document.createElement('img');
        const restMenu = document.createElement('a');
        const menuIcon = document.createElement('img');
        restName.textContent = rawData.restaurants[i].restaurant.name;
        restAdd.textContent = rawData.restaurants[i].restaurant.location.address;
        restRate.textContent = rawData.restaurants[i].restaurant.user_rating.aggregate_rating + "/5";
        camIcon.src = "../images/camera-icon.png";
        restPic.href = rawData.restaurants[i].restaurant.photos_url;
        restPic.target = "_blank";
        menuIcon.src = "../images/menu-icon.png";
        restMenu.href = rawData.restaurants[i].restaurant.menu_url;
        restMenu.target = "_blank";
        iconDiv.className = "icon-div"
        restPic.appendChild(camIcon);
        restMenu.appendChild(menuIcon);
        iconDiv.appendChild(restPic);
        iconDiv.appendChild(restMenu);
        newDiv.appendChild(restName);
        newDiv.appendChild(restAdd);
        newDiv.appendChild(restRate);
        newDiv.appendChild(iconDiv);
        restLocations.appendChild(newDiv);
    }

}
/////////////////////////////////////////////////////////////////////
/////////////////// x buton functions //////////////////////////////
///////////////////////////////////////////////////////////////////
const xButton = document.querySelector('[data-x-button]')
xButton.addEventListener('click',hideRestaurants)
function hideRestaurants() {
    restContainer.classList.remove('show')
}