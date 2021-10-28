import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User []=[]
  user_url = 'http://127.0.0.1:8000/users/';
  // getuser_url =''
  constructor(public userHttp:HttpClient) { }
  userFunction():Observable <any>{
    return this.userHttp.get(this.user_url)
  }
  
}
