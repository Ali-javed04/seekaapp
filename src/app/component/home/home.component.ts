import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name:string ='john'
  public profiles:any = []
  public Aprofiles:any = [
    {
      coverPic:'assets/cover.jpg',
      profilePic: 'assets/profile1.png',
      name: 'Kumar preety',
      role: 'Modal',
      mutualFriend:7

    },
    {
      coverPic:'assets/cover.jpg',
      profilePic: 'assets/profile1.png',
      name: 'Kumar preety',
      role: 'Modal',
      mutualFriend:7
    },
    {
      coverPic:'assets/cover.jpg',
      profilePic: 'assets/profile1.png',
      name: 'Kumar preety',
      role: 'Modal',
      mutualFriend:7
    },
    {
      coverPic:'assets/cover.jpg',
      profilePic: 'assets/profile1.png',
      name: 'Kumar preety',
      role: 'Modal',
      mutualFriend:7
    }
  ]

  public posts  = [
    {
       type: 'scholorship',
       profileImg : '/assets/profile1.png',
       name: 'John leaver',
       school:'school of tameer millet',
       adress: 'High School',
       country: 'kalalpur Malysia'
    },
    {
      type:'article',
      profilePic:'/assets/profile1.png',
      name:'mark peter',
      time: 'yesterday 2:00 pm',
      tag1:'amerson university of technology',
      tag2:'instuation',
      tag3:'Application'
    },
    {
      type:'article',
      profilePic:'/assets/profile1.png',
      name:'mark peter',
      time: 'yesterday 2:00 pm',
      tag1:'amerson university of technology',
      tag2:'instuation',
      tag3:'Application'
    },
    {
      type: 'scholorship',
      profileImg : '/assets/profile1.png',
      name: 'John leaver',
      school:'school of tameer millet',
      adress: 'High School',
      country: 'kalalpur Malysia'
   },
  ]

  constructor() { }

  ngOnInit(): void {
    this.profiles = this.Aprofiles.slice(0,2)
  }

  allProfile() {
    this.profiles = this.Aprofiles
  }
  lessProfile() {
    this.profiles = this.Aprofiles.slice(0,2)
  }
}
