/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { Todo } from './todo';

describe('App: Angular2TodoApp', () => {
    beforeEach(() => {
        addProviders([AppComponent, TodoService]);
    });
    
    it('should create the app',
       inject([AppComponent], (app: AppComponent) => {
           expect(app).toBeTruthy();
       }));
    
    it('should have as title \'app works!\'',
       inject([AppComponent], (app: AppComponent) => {
           expect(app.title).toEqual('app works!');
       }));
});
