import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderModule } from './HeaderModule/header.module';
import { SideBarComponent } from './SideBar/side-bar.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { LayoutComponent } from './Layout/layout/layout.component';


@NgModule({
  declarations: [ 
      SideBarComponent,
      FooterComponent,
      LayoutComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    CommonModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    MatSidenavModule,
    
    HeaderModule
  ],
  exports:[
      HeaderModule,
      SideBarComponent,
      FooterComponent,
      LayoutComponent
  ]
})
export class SharedModule { }
