import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserPipePipe } from './user-pipe.pipe';
import { UserServiceService } from './user-service.service';
import { UserDocsComponent } from './user-docs/user-docs.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input'
import { StyleDirective } from './style.directive';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PipeAppComponent } from './pipe-app/pipe-app.component';
import { UserTableComponent } from './user-table/user-table.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    UserPipePipe,
    UserDocsComponent,
    StyleDirective,
    PipeAppComponent,
    UserTableComponent,
    UserDocsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTabsModule,
    NgbModule,
    // RouterModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
