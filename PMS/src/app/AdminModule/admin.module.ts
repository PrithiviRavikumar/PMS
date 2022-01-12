import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { DashboardPageComponent } from './Pages';
import { SharedModule } from './Shared/shared.module';

@NgModule({
  declarations: [DashboardPageComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    SharedModule,
  ],  
  exports: [ ],
  providers: [
   
  ]
})
export class AdminModule { }
