import {Component, Input} from 'angular2/core'

@Component({
    selector: "item-details",
    templateUrl: "./app/details.html"
})
export class ItemDetails {
    @Input()
    selectedItem:string;
}