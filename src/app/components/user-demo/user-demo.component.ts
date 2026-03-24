import { Component, OnInit } from '@angular/core';
import { User } from '../../services/interfaces/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrl: './user-demo.component.css'
})
export class UserDemoComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getUsers().subscribe(response => {
            this.users = response.users.slice(0, 5);
            console.log(this.users);
        });
    }
}
