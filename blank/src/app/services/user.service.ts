import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {

  }



}
