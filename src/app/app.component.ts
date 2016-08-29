import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [TodoService]
})
export class AppComponent {
    title = 'app works!';
    newTodo: Todo = new Todo();

    constructor(private todoService: TodoService) { }

    addTodo() {
        this.todoService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }

    toggleTodoComplete(todo) {
        this.todoService.toggleTodoComplete(todo);
    }

    removeTodo(todo) {
        this.todoService.deleteTodoById(todo.id);
    }
    
    get todos() {
        return this.todoService.getAllTodos();
    }

    getRemainingTodos() {
        return this.todoService.getRemainingTodos();
    }
}
