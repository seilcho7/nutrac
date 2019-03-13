const URL1 = ""

function retrieveData() {
    fetch(URL1)
        .then(function (response) {
            return response.json();
        })
        .then(function (actualData) {
            console.log(actualData);
        })
}