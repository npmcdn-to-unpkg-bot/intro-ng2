import {Component, ViewChild} from 'angular2/core';
import {AppTopbar} from "./AppTopbar";
import {AppMenu} from "./AppMenu.ts";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.template.html',
    directives:[AppTopbar,AppMenu]
})
export class AppComponent {
    
    @ViewChild(AppTopbar)
    topbar:AppTopbar;

    @ViewChild(HTMLInputElement)
    nameInput:HTMLInputElement;
    
    appUsername:string = 'toto';
    
    items:string[] = ['Luc', 'Leo', 'Eve'];
    
    hideTopbar(){
        console.log('hideTopbar...', this.topbar);
        this.topbar.visible = false;
    }

    openProfile(){
        console.log('open profile');
    }

    updateName(){
        console.log(this.nameInput);
        this.appUsername = 'yoooo';
    }
}
