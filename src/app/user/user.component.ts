import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User[] =[]
  constructor(public userService:UserService) { }
  fetchUser(){
    this.userService.userFunction().subscribe(data => {
      this.user = data;
      console.log(this.user)
      return (this.user);

    })
    
  }

 

  ngOnInit(): void {
    this.fetchUser()
  }
}
