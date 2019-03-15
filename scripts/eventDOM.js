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
}

getUserInput();

// After User selects meal and diet, when clicking submit, it takes in the values and calls Recipe API
function submitButtonRetrieve() {
    retrieveData(getRelevantData(mealFinal, vegetarianFinal));
    setRecipeImage();
}

// Submit Button DOM
const submitButton = document.querySelector("[data-submitButton]");
submitButton.addEventListener("click", submitButtonRetrieve);

//////////////////////// RECIPE IMAGE ////////////////////////
// recipeImage = recipe image DOM
const recipeImage = document.querySelector("[data-recipeIMG]");

// setRecipeImage function sets the src of the recipeImage DOM to the image of the recipe
function setRecipeImage(){
    recipeImage.src = cleanRecipeInfo[0]; // NOTE CHANGE 0 TO ELEMENT WITH IMAGE SOURCE
}