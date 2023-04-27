import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDocsComponent } from './user-docs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [UserDocsComponent],
  imports: [
    CommonModule,SharedModuleModule,ReactiveFormsModule
  ]
})
export class UserDocsModule { }
