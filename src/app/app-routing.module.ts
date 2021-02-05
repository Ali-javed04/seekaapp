import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path: 'apply', loadChildren: () => import(`./component/apply/apply.module`).then(m => m.ApplyModule) },
  { path: 'mypeople', loadChildren: () => import(`./component/mypeople/mypeople.module`).then(m => m.MypeopleModule) },
  { path: 'messages', loadChildren: () => import(`./component/messages/messages.module`).then(m => m.MessagesModule) },
  { path: 'notification', loadChildren: () => import(`./component/notification/notification.module`).then(m => m.NotificationModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
