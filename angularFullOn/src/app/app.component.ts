import { Component, OnInit, ViewChild } from '@angular/core';
import { IUserInterface } from './interface/userInterface';
import { UserServiceService } from './user-service.service';
import { Observable } from 'rxjs';
import {MatTable} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
   enteredNumber : number = 0 ;
 
  constructor(private userService : UserServiceService, private router: Router) {}

  getNumber(enternum:string) {
      console.log(enternum);
      if(isNaN(parseInt(enternum))) {
        console.log("please provide a number")
      }
      else {
        console.log('fine');
        this.enteredNumber = parseInt(enternum);
      }
  }

  navigateCustForm() {
    this.router.navigate(['/custForm',3,4], {
      queryParams : {
        name : 'jai'
      }
    });
  }
}
