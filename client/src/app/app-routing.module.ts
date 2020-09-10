import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

import { AuthGuard } from './auth.gaurd';

import {AchievementsAndAwardsComponent} from './achievements-and-awards/achievements-and-awards.component';
import {ContactComponent} from './contact/contact.component';
import {GalleryComponent} from './gallery/gallery.component';
import {LoginComponent} from './login/login.component';
import {OnlineClassesComponent} from './online-classes/online-classes.component';
import {SignupComponent} from './signup/signup.component';
import {BasicComponent} from './basic/basic.component';
import {AdminComponent} from './admin/admin.component';
import {UpdatestudentComponent} from './updatestudent/updatestudent.component';

import { YouTubePlayerModule } from '@angular/youtube-player';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'achievements-and-awards',component:AchievementsAndAwardsComponent},
{path:'online-classes',component:OnlineClassesComponent},
{path:'gallery',component:GalleryComponent},
{path:'contact',component:ContactComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},


{ path: 'basic', component:BasicComponent, canActivate: [AuthGuard]},


{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
{ path: 'updatestudent', component: UpdatestudentComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
