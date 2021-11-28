/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = "https://jsonplaceholder.typicode.com/";
  private options: any = {headers: new HttpHeaders({'Content-Type': 'application/json; charset: UTF-8'})};


  constructor(private http: HttpClient) { }

  createData(data: any){
    //stringify transforma o JSON em uma string
    return this.http.post(`${this.api}posts`,JSON.stringify(data),this.options);
  }

  readData(){
    return this.http.get(`${this.api}posts`);
  }

  updateData(data: any){
    return this.http.put(`${this.api}posts/1`,JSON.stringify(data),this.options);
  }

  deleteData(){
    return this.http.delete(`${this.api}posts/1`);
  }

}
