import Autocomplete from './autocomplete';
import Chips from './chips';
let data,
    input = document.querySelector("input.autocomplete"),
    input2 = document.querySelector("input.autocomplete2"),
    inputChips = document.querySelector("input.chips"),
    inputContainer = input.parentNode.parentNode;

let autocomplete = new Autocomplete('https://crossorigin.me/http://country.io/names.json', input);
let autocomplete2 = new Autocomplete('https://crossorigin.me/http://country.io/names.json', input2);

const resultDiv = document.createElement('div');
resultDiv.classList.add('autocomplete__results');
inputChips.parentNode.parentNode.appendChild(resultDiv);
let chips = new Chips('https://crossorigin.me/http://country.io/names.json', inputChips, {
    onChange: (chips) => {
        resultDiv.innerHTML = chips.join(', ')
    }
});