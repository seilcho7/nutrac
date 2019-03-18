// Requests User's location 
let userLat;
let userLong;
function getLocation(){
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
        userLat = position.coords.latitude;
        userLong = position.coords.longitude;
        getRestaurants(userLat, userLong);
    })
}

let rawData;

// Function takes in coordinates and returns a list of nearby restaurants from nearest to fartheest
function getRestaurants(latitude, longitude){
    fetchURL = `https://developers.zomato.com/api/v2.1/search?count=10&lat=${latitude}&lon=${longitude}&sort=real_distance&order=asc`;

    fetch(fetchURL, {
        headers: {
        Accept: "application/json",
        "User-Key": "9df380e057a5bb0ab262bacf6a7fd9d4"
    }
    })
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        rawData = data;
        displayRestaurants();
    });
}
