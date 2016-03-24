import {Component, EventEmitter, Output, Input} from 'angular2/core';


@Component({
 selector:'app-topbar',
    templateUrl:'./app/apptopbar.html',
    styleUrl:'./app/topbar.css',
    events:['logout', 'profileEvent']
})
export class AppTopbar{
    appName = "appAngular2";

    @Input()
    username:string;

    logout:EventEmitter;
    profileEvent:EventEmitter;
    visible:bool = true;
    
    constructor(){
        this.logout = new EventEmitter();
        this.profileEvent = new EventEmitter();
    }

    openProfile(){
        this.profileEvent.emit();
    }
    
    logoutRequest(){
        console.log('logout');
        this.logout.emit();
    }
}
