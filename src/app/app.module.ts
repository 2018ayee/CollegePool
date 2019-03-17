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
import { UserService } from './user.service';
import { TransferService } from './datatransfer.service';
import { DynamicAddService } from './dynamic-add.service';
import { PostingComponent } from './posting/posting.component';
import { UpdateComponent } from './update/update.component';
import { ConnectComponent } from './connect/connect.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { LoginrouteComponent } from './loginroute/loginroute.component';
import { DialogComponent } from './dialog/dialog.component';
import { NavigationComponent } from './navigation/navigation.component';

import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'loginroute', component: LoginrouteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginDirective,
    LoginComponent,
    HomeComponent,
    HomeDirective,
    HistoryComponent,
    SettingsComponent,
    PostingComponent,
    UpdateComponent,
    ConnectComponent,
    LoginrouteComponent,
    DialogComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, onSameUrlNavigation: 'reload' } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    AmplifyAngularModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg'
    })
  ],
  providers: [PostingService, TransferService, DynamicAddService, AmplifyService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [PostingComponent]
})

export class AppModule { }
