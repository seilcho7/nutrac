const URL1 = ""

// adds function that fetch data from api
function retrieveData() {
    fetch(URL1)
        .then(function (response) {
            return response.json();
        })
        .then(function (actualData) {
            console.log(actualData);
        })
}