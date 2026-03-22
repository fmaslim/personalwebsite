import { Component } from '@angular/core';
import { Todo } from '../../services/interfaces/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-api-practice',
  templateUrl: './api-practice.component.html',
  styleUrl: './api-practice.component.css'
})
export class ApiPracticeComponent {
    todo: Todo | null = null;
    todo_many: Todo[] = [];

    constructor(private todoService: TodoService) { }

    ngOnInit()
    {
        this.todoService.getTodo().subscribe(data => {
            this.todo = data;
            console.log(data);
        });

        this.todoService.getTodo_Many().subscribe(data => {
            this.todo_many = data.slice(0, 10);
            console.log(this.todo_many);
        });
    }
}
