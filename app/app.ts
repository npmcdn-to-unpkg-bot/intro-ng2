import {Component, ViewChild} from 'angular2/core';
import {AppTopbar} from "./AppTopbar";
import {AppMenu} from "./AppMenu";
import {ItemDetails} from "./details";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.html',
    directives:[AppTopbar,AppMenu, ItemDetails]
})
export class AppComponent {

    @ViewChild(AppTopbar)
    topbar:AppTopbar;

    selectedItem:any;

    items:string[] = [{id:1, prenom:'Luc'}, {id:2, prenom:'Lea'}, {id:3, prenom:'Eve'}];

    logout(){
        console.log('hideTopbar...', this.topbar);
        this.topbar.visible = false;
    }

    openProfile(){
        console.log('open profile');
        alert('profil');
    }
    
    onItemSelected(item:any){
        console.log('onItemSelected', item);
        this.selectedItem = item;
    }
}
