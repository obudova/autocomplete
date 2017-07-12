let data,
    input = document.querySelector("input.autocomplete"),
    input2 = document.querySelector("input.autocomplete2"),
    inputChips = document.querySelector("input.chips"),
    inputContainer = input.parentNode.parentNode,
    promise = fetch('https://crossorigin.me/http://country.io/names.json', {
    mode: 'cors'
})
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        const dataJson = Object.keys(result).map(key => result[key]);


        let autocomplete = new Autocomplete(dataJson, input);
        let autocomplete2 = new Autocomplete(dataJson, input2);

        const resultDiv = document.createElement('div');
        resultDiv.classList.add('autocomplete__results');
        inputChips.parentNode.parentNode.appendChild(resultDiv);
        let chips = new Chips(dataJson, inputChips, {
            onChange: (chips) => {
                resultDiv.innerHTML= chips.join(', ');
            }
        })
    });
