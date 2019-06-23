import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module.tns';
import { AppComponent } from './app.component';
import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { ConnectComponent } from './connect/connect.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginrouteComponent } from './loginroute/loginroute.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PostingComponent } from './posting/posting.component';
import { SettingsComponent } from './settings/settings.component';
import { UpdateComponent } from './update/update.component';
import { DialogComponent } from './dialog/dialog.component';
import { SearchComponent } from './search/search.component';

import { LoginDirective } from './login.directive';
import { HomeDirective } from './home.directive';

import { PostingService } from './posting.service';
import { UserService } from './user.service';
import { TransferService } from './datatransfer.service';
import { DynamicAddService } from './dynamic-add.service';
import { PaymentService } from './payment.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AgmCoreModule } from '@agm/core';
import { ChatModule } from './chat/chat.module';
import { NgxPayPalModule } from 'ngx-paypal';


// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';


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
    SearchComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    ReactiveFormsModule,
    NativeScriptFormsModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg'
    }),
    ChatModule,
    NgxPayPalModule
  ],
  providers: [PostingService, TransferService, DynamicAddService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [PostingComponent, PaymentMethodComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
