import {Component, NgFor, Input, Output ,EventEmitter} from 'angular2/core';

@Component({
    selector:'app-menu',
    templateUrl:'./app/appmenu.html'

})
export class AppMenu{
    @Input()
    items:string[];

    @Output()
    itemSelected = new EventEmitter();
    
    constructor(){

    }
    
    selectItem(item:any){
        console.log('selectItem...', item);
        this.itemSelected.emit(item);
    }
}