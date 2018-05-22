import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }