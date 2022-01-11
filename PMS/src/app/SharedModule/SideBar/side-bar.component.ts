import { Component, OnInit } from '@angular/core';

import { routes } from '../../Consists/routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public routes: typeof routes = routes;
  public isOpenUiElements = false;


  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }
}
