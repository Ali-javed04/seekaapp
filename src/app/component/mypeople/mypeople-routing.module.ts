import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MypeopleComponent } from './mypeople.component';

const routes: Routes = [
  {
    path: '', component: MypeopleComponent, children: [
      {
        path: 'mypeople', component: MypeopleComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MypeopleRoutingModule { }
