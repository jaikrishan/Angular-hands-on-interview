import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeAppComponent } from './pipe-app.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { UserPipePipe } from '../user-pipe.pipe';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [{path: '', component : PipeAppComponent}]
@NgModule({
  declarations: [PipeAppComponent, UserPipePipe],
  imports: [
    CommonModule,SharedModuleModule,
    RouterModule.forChild(routes)
  ],
})
export class PipeAppModule { }
