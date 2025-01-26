import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  users: User[] = [];

  constructor(private userService: UserService){

    this.userService.findAll().subscribe(data => {
      this.users = data;
    })

  }



}
