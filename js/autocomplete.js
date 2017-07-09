const defaultOptions = {
    amountOfSuggestions: 5,
    notFoundText: 'Country is not found'
};

class Autocomplete{
    constructor(data, selector, options){
        this.input = document.querySelector(selector);
        this.data = data;
        this.list = document.createElement('ul');
        this.option=Object.assign({},defaultOptions, options);
        this._isOpen=false;
        this.init();
    }
    get isOpen() {
        return _isOpen;
    }
    set isOpen(value){
        if(value){
            this._isOpen=true;
            this.input.parentNode.appendChild(this.list);
        }else {
            this._isOpen=false;
        }
    }
    init(){
        this.input.addEventListener('input', this.onInput.bind(this));
        this.input.addEventListener('focus', this.onFocus.bind(this));
        document.addEventListener('click', (event)=>{
            this.onClick(event);
        })
    }
    inputIsEmpty(){
        return  this.input.value==="";
    }
    printAllData(){
        this.data.map((item)=>{
            this.createResult(item);
        })
    }
    refreshResults(){
        this.list.innerHTML="";
        this.list.parentNode.classList.remove('error');
    }
    createResult(item){
        let li = document.createElement('li');
        li.addEventListener('click' , (event)=> {
            this.onListItemClick(event);
        });
        li.innerHTML=item;
        this.list.appendChild(li);
    }
    onInput(){
        this.isOpen=true;
        this.refreshResults();
        if(this.inputIsEmpty()){
            this.printAllData();
        }else{
            const value = this.input.value;
            const regexp = new RegExp(`(${value})`, 'gi');
            let result = this.data.filter((item)=>{
                return  item.match(regexp);
            });
            if(result.length){
                const listData = result.map((item)=>{
                    return item.replace(regexp,'<b>$1</b>');
                });
                listData.slice(0, this.option.amountOfSuggestions).map( item =>{
                    this.createResult(item);
                })
            }else{
                this.list.parentNode.classList.add('error');
                this.list.innerHTML=this.option.notFoundText;
            }
        }
    }
    onFocus(){
        console.log('Yea focus');
        this.isOpen=true;
        if(this.inputIsEmpty()){
            this.printAllData();
        }else {
            this.onInput();
        }
    }
    onListItemClick(e){
        let value = e.srcElement.innerHTML.replace(/<\/?[^>]+>/g,'');
        this.input.value=value;
        alert(value);
    }
    onClick(e){
        let elem = e.target.parentNode;
        let isUnderAutomplete = false;
        while (elem.parentNode){
            if(elem.classList.contains("autocomplete__container")){
                console.log('autocomplete');
                isUnderAutomplete=true;
                return
            }
            elem = elem.parentNode;
        }
        if(!isUnderAutomplete){
            this.refreshResults();
            this.isOpen=false;
        }
    }
}