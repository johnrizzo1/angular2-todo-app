/* tslint:disable:no-unused-variable */
import {
    addProviders,
    beforeEach, beforeEachProviders,
    describe, xdescribe,
    expect, it, xit,
    async, inject
} from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TodoAppComponent } from './todo-app.component';
import { TodoService } from '../todo.service';

describe('Component: TodoApp', () => {
  beforeEachProviders(() => [TodoService]);

  it('should create an instance', () => {
      inject([TodoAppComponent], (component: TodoAppComponent) => {
          expect(component).toBeTruthy();
      })
    //let component = new TodoAppComponent();
  });
});
