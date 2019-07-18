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
import { NgxPayPalModule } from 'ngx-paypal';

import { PostingService } from './posting.service';
import { UserService } from './user.service';
import { TransferService } from './datatransfer.service';
import { DynamicAddService } from './dynamic-add.service';
import { PaymentService } from './payment.service';
import { PostingComponent } from './posting/posting.component';
import { UpdateComponent } from './update/update.component';
import { ConnectComponent } from './connect/connect.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
// import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { LoginrouteComponent } from './loginroute/loginroute.component';
import { DialogComponent } from './dialog/dialog.component';
import { NavigationComponent } from './navigation/navigation.component';

import { AgmCoreModule } from '@agm/core';
import { ChatModule } from './chat/chat.module';
import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';
import { FloatBtnComponent } from './float-btn/float-btn.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { LocationComponent } from './location/location.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'loginroute', component: LoginrouteComponent },
  { path: 'payments', component: PaymentsComponent }
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
    NavigationComponent,
    AutoGeneratedComponent,
    PaymentsComponent,
    PaymentMethodComponent,
    PaymentComponent,
    SearchComponent,
    FloatBtnComponent,
    AddModalComponent,
    LocationComponent
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
    // AmplifyAngularModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg'
    }),
    ChatModule,
    NgxPayPalModule
  ],
  // providers: [PostingService, TransferService, DynamicAddService, AmplifyService, UserService],
  providers: [PostingService, TransferService, DynamicAddService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [PostingComponent, PaymentMethodComponent]
})

export class AppModule { }
