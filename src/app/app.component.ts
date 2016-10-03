import { Component } from '@angular/core';
import { TodoAppComponent } from './todo-app';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [TodoAppComponent]
})
export class AppComponent {}
