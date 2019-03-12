import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CognitoAuth } from 'amazon-cognito-auth-js/dist/amazon-cognito-auth';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginDirective } from './login.directive';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeDirective } from './home.directive';
import { HistoryComponent } from './history/history.component';
import { SettingsComponent } from './settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PostingService } from './posting.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginDirective,
    LoginComponent,
    HomeComponent,
    HomeDirective,
    HistoryComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [PostingService],
  bootstrap: [AppComponent]
})

export class AppModule { }
