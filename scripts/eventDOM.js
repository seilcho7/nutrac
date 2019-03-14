let mealFinal = "";
let vegetarianFinal = "";

function mealResult(meal) {
    mealFinal = meal;
    console.log(mealFinal);
    return mealFinal;
}

function vegetarianResult(vegetarian) {
    vegetarianFinal = vegetarian;
    console.log(vegetarianFinal);
    return vegetarianFinal;
}


// Track which button user clicks and return the result.
function getUserInput() {
    const breakfast = document.getElementById('breakfast').addEventListener('click', function () {
        mealResult("breakfast");
    });
    const lunch = document.getElementById('lunch').addEventListener('click', function () {
        mealResult("lunch");
    });
    const dinner = document.getElementById('dinner').addEventListener('click', function () {
        mealResult("dinner");
    });
    const dessert = document.getElementById('dessert').addEventListener('click', function () {
        mealResult("dessert");
    });
    const isVegetarian = document.getElementById('is-vegetarian').addEventListener('click', function () {
        vegetarianResult("%2Cvegetarian");
    });
    const isNotVegeterian = document.getElementById('not-vegetarian').addEventListener('click', function () {
        vegetarianResult("");
    });
}

getUserInput();
