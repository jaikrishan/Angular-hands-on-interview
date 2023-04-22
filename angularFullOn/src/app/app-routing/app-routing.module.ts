import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDocsComponent } from '../user-docs/user-docs.component';
import { PipeAppComponent } from '../pipe-app/pipe-app.component';
import { UserTableComponent } from '../user-table/user-table.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';

const route: Routes = [
  {path : '', redirectTo : 'custForm', pathMatch: 'full' },
  {path : 'custForm/:id/:id', component :UserDocsComponent },
  {path : 'pipeApp', component :PipeAppComponent },
  {path : 'userTable', component :UserTableComponent },
  {path : '**', component :UserTableComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
