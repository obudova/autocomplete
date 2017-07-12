class Chips extends Autocomplete{
    constructor(data, selector, options){
        super(data, selector, options);
        this.resultArr=[];
        this.options = Object.assign({}, defaultOptions, options); // merge options

    }
    onListItemClick(e){
        const value = e.srcElement.innerHTML.replace(/<\/?[^>]+>/g,'');
        if(this.resultArr.indexOf(value)>=0){
            return;
        }
        let chip = document.createElement('div');
        chip.classList.add('chip');
        let buttonRemove = document.createElement('span');
        buttonRemove.addEventListener('click', ()=>{
            this.removeChip(chip);
        });
        chip.innerHTML= value;
        chip.appendChild(buttonRemove);
        this.input.parentNode.parentNode.insertBefore(chip, this.input.parentNode);
        this.input.value = "";
        this.onInput();
        this.createResultArr(value);
        this.onChange();
    }
    createResultArr(item){
        this.resultArr.push(item);
    }
    removeChip(chipItem){
        const chipValue = chipItem.textContent;
        const index = this.resultArr.indexOf(chipValue);
        this.resultArr.splice(index, 1);
        console.log(this.resultArr);
        this.onChange();
        chipItem.remove();

    }
    onChange(){
        this.options.onChange && this.options.onChange.call(this, this.resultArr);
    }
};