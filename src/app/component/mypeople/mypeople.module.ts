import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypeopleRoutingModule } from './mypeople-routing.module';
import { MypeopleComponent } from './mypeople.component';


@NgModule({
  declarations: [
    MypeopleComponent
  ],
  imports: [
    CommonModule,
    MypeopleRoutingModule
  ]
})
export class MypeopleModule { }
