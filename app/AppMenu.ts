import {Component, NgFor, Input} from 'angular2/core';
 

@Component({
    selector:'app-menu',
    templateUrl:'./app/appmenu.template.html'
})
export class AppMenu{
    @Input()
    items:string[];
    
}