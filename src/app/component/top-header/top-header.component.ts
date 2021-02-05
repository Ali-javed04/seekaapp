import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
  public currenturl: string = '';

  constructor (private router:Router,private location: Location) { }

  ngOnInit(): void {

    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currenturl = event.url
    });

  }

  currentState(url:string): boolean {
   return this.currenturl.includes(url)
  }

}
