import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './app-employee-card.component.html',
  styleUrl: './app-employee-card.component.css'
})
export class AppEmployeeCardComponent {
    @Input() employee: any;
}
