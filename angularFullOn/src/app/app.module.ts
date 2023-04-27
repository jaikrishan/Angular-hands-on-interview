import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserPipePipe } from './user-pipe.pipe';
import { UserServiceService } from './user-service.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipeAppModule } from './pipe-app/pipe-app.module';
import { UserDocsModule } from './user-docs/user-docs.module';
import { UserTableModule } from './user-table/user-table.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    NgbModule,
    PipeAppModule,
    UserDocsModule,
    UserTableModule,
    // RouterModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
