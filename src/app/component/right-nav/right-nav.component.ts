import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.scss']
})
export class RightNavComponent implements OnInit {


  public friendList = [
    {
      profile:'/assets/profile1.png',
      name: 'Anoskia sherma',
      location: 'university of calfonia',
      mutualFriend: 12
    },
    {
      profile:'/assets/profile4.jpg',
      name: 'Nigoal Lovie',
      location: 'university of Arozina',
      mutualFriend: 3
    },
    {
      profile:'/assets/profile1.png',
      name: 'Isahaq linq',
      location: 'Monash University',
      mutualFriend: 0
    },
    {
      profile:'/assets/profile4.jpg',
      name: 'Anoskia sherma',
      location: 'university of calfonia',
      mutualFriend: 4
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
