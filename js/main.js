let data,
    input = document.getElementById("#input");
    promise = fetch('https://crossorigin.me/http://country.io/names.json', {
    mode: 'cors'
})
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        dataJson = Object.keys(result).map(key => result[key]);
        //console.log(dataJson);
        let autocomplete = new Autocomplete(dataJson, 'input.autocomplete');

    });
