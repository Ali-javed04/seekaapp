import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {

  urlListner = new BehaviorSubject<string>(this.location.path())
  constructor(private location: Location) { }

  urlUpdate(){
    this.urlListner.next(this.location.path())
  }
}
