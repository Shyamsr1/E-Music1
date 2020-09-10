import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './auth.service';

import { AchievementsAndAwardsComponent } from './achievements-and-awards/achievements-and-awards.component';
import { OnlineClassesComponent } from './online-classes/online-classes.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { BasicComponent } from './basic/basic.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

import * as M from "materialize-css/dist/js/materialize";
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { AuthGuard } from './auth.gaurd';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AchievementsAndAwardsComponent,
    OnlineClassesComponent,
    GalleryComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    AdminComponent,
    BasicComponent,
    UpdatestudentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
