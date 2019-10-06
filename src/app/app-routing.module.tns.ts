import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginDirective } from './login.directive';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeDirective } from './home.directive';
import { HistoryComponent } from './history/history.component';
import { SettingsComponent } from './settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPayPalModule } from 'ngx-paypal';

import { PostingService } from './posting.service.tns';
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

import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { SearchComponent } from './search/search.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component'
import { WelcomeComponent } from './welcome/welcome.component';
import { PostingInfoComponent } from './posting-info/posting-info.component';
import {SettingsformComponent} from './settingsform/settingsform.component';
import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ViewImageComponent } from './view-image/view-image.component';
import { ChatInfoComponent } from './chat-info/chat-info.component';
import { StartRideComponent } from './start-ride/start-ride.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'loginroute', component: LoginrouteComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'paymentinfo', component: PaymentInfoComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'posting-info', component: PostingInfoComponent },
  { path: 'settingsform', component: SettingsformComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'chat-list', component: ChatListComponent },
  { path: 'view-image', component: ViewImageComponent },
  { path: 'chat-info', component: ChatInfoComponent },
  { path: 'start-ride', component: StartRideComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
