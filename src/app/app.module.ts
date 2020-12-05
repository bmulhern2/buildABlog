import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card'
import { GETComponent } from './components/get/get.component' 

import { HttpClientModule } from '@angular/common/http'

import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { MatDialogModule } from '@angular/material/dialog';
import { PutComponent } from './dialogs/put/put.component';
import { DeleteComponent } from './dialogs/delete/delete.component' 

import { CookieService } from 'ngx-cookie-service' 


@NgModule({
  declarations: [
    AppComponent,
    GETComponent,
    PutComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
