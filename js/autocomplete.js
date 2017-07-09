const defaultOptions = {

};

class Autocomplete{
    constructor(data, id, options){
        this.input = document.getElementById(id);
        this.data = data;
        this.list = document.createElement('ul');
        this.list.innerHTML='hello world!';
        this._isOpen=false;
        this.init();
    }
    get isOpen() {
        return _isOpen;
    }
    set isOpen(value){
        if(value){
            this._isOpen=true;
            input.parentNode.appendChild(list);
        }else {
            this._isOpen=false;
        }
    }
    init(){
        this.input.addEventListener('input', function () {
            console.log('Yea');
            this.onInput();
        })
    }
    onInput(){
        this.isOpen=true;
    }


}