import { Component, OnInit, ViewChild } from '@angular/core';
import { IUserInterface } from '../interface/userInterface';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<IUserInterface> | undefined;
  title = 'angularFullOn';
   users : IUserInterface[] = [];
   users$ : Observable<IUserInterface[]> | undefined;
   displayedColumns: string[] = ['id', 'name', 'email', 'gender','status'];

   constructor(private userService : UserServiceService ){
    console.log('const called');
   }

   ngOnInit(): void {
    console.log('ngOnInit called');
    // this.userService.getUser().subscribe(item => {
    //   this.users = item
    //   console.log(this.users);
    // });
   
    this.users$ = this.userService.getUser$;
    this.users$.subscribe(item => {
      this.users = item
    })
  }

  addData() {
    this.table?.renderRows();
  }

  removeData() {
    this.table?.renderRows();
  }
}
