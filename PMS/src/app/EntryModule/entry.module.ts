import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from  '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EntryRoutingModule } from './entry-routing.module';
import { LandingPageComponent } from './Pages';
import { LoginFormComponent } from './Pages/login-form/login-form.component';
import { SignFormComponent } from './Pages/sign-form/sign-form.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    LoginFormComponent,
    SignFormComponent
  ],
  imports: [
    CommonModule,
    EntryRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class EntryModule { }
