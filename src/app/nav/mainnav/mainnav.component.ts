import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd} from "@angular/router";


enum MainPage {
  home=1,
  aboutme=2,
  contact=3
}

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.css']
})
export class MainnavComponent implements OnInit {
  pageActice : MainPage =1;
  constructor(private router:Router) {
    this.router.events.subscribe(x=>{
      if(x instanceof NavigationEnd){
        if(x.url.indexOf("home")>0){
          this.pageActice=MainPage.home;
        }
        else if(x.url.indexOf("aboutme")>0){
          this.pageActice=MainPage.aboutme;
        }
        else if(x.url.indexOf("contact")>0){
          this.pageActice=MainPage.contact;
        }
        else{
          this.pageActice=MainPage.home;
        }
      }
    });
   }

  ngOnInit(): void {
  }

}
