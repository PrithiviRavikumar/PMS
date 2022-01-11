import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../Consists';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit 
{
  public todayDate: Date = new Date();
  public routers: typeof routes = routes;
  
  constructor(
    private router: Router
  ) {
    
   }

  ngOnInit(): void {
  }
  public sendLoginForm(): void {
    //this.service.login();

    this.router.navigate([this.routers.DASHBOARD]).then();
    console.log("hello");
  }

  public sendSignForm(): void {
   // this.service.sign();

    this.router.navigate([this.routers.DASHBOARD]).then();
    console.log("hello world");
  }

}
