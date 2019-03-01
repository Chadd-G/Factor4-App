import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Provider } from '../providers/data/provider';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';
import { BarcodePage } from '../pages/barcode/barcode';
import { AddValuePage } from '../pages/add-value/addvalue';
import { TransactionsPage } from '../pages/transactions/transactions';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PaymentWindowPage } from '../pages/payment-window/payment-window';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    WelcomePage,
    HomePage,
    TransactionsPage,
    BarcodePage,
    AddValuePage,
    PaymentWindowPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    HomePage,
    TransactionsPage,
    BarcodePage,
    AddValuePage,
    PaymentWindowPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Provider
  ]
})
export class AppModule {}
