import { Component, OnInit } from '@angular/core';
import { TodoHttp } from '../../services/interfaces/TodoHttp';
import { TodoHttpService } from '../../services/todo-http.service';

@Component({
  selector: 'app-todo-http-practice',
  templateUrl: './todo-http-practice.component.html',
  styleUrl: './todo-http-practice.component.css'
})
export class TodoHttpPracticeComponent implements OnInit {
    todos: TodoHttp[] = [];

    constructor(private todoHttpService: TodoHttpService)
    {
    }

    ngOnInit(): void {
        this.todoHttpService.getTodoHttp().subscribe(response => {
            this.todos = response.todos;
            console.log(this.todos);
        });
    }
}
