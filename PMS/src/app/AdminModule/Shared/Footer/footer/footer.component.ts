import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public flatlogic: string = 'https://flatlogic.com/';
  public flatlogicAbout: string = 'https://flatlogic.com/about';
  public flatlogicBlog: string = 'https://flatlogic.com/blog';
}
