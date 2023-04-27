import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { UserTableComponent } from './user-table.component';
import { StyleDirective } from '../style.directive';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [UserTableComponent, StyleDirective,],
  imports: [
    CommonModule,
    SharedModuleModule,
    MatTableModule
  ]
})
export class UserTableModule { }
