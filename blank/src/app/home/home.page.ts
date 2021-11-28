/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/semi */
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private apiService: ApiService) {
    this.createData();
    this.readData();
    this.updateData();
  }

  createData(){
    const data: any = {
      title: 'Joao',
      body: 'Teste',
      userId: 10
    };


    this.apiService.createData(data).subscribe(data =>{
      console.log(data);
    });
  }

  readData(){
    this.apiService.readData().subscribe(data =>{
      console.log(data);
    });
  }

  updateData(){
    const data: any = {
      id: 1,
      title: 'Joao',
      body: 'TesteUpdate',
      userId: 10
    };

    this.apiService.updateData(data).subscribe(data =>{
      console.log(data);
    });
  }

  deleteData(){
    this.apiService.deleteData().subscribe(data =>{
      console.log(data);
    });
  }


}
