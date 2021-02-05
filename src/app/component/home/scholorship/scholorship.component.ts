import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-scholorship',
  templateUrl: './scholorship.component.html',
  styleUrls: ['./scholorship.component.scss']
})
export class ScholorshipComponent implements OnInit {

  @Input() post:any = []


  public mainData = 1;
  constructor() { }

  ngOnInit(): void {
  }

  hideDiv() {
    this.mainData = 2;
  }
  undoDiv() {
    this.mainData = 1 ;
  }

}
