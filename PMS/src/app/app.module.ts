import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryModule } from './EntryModule/entry.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AdminModule } from './AdminModule/admin.module';

@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EntryModule,
    BrowserAnimationsModule,
    
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
