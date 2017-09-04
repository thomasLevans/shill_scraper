import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HamiltonPage } from '../pages/hamilton/hamilton';
import { BotNetworkPage } from '../pages/bot-network/bot-network';
import { TweetsPage } from '../pages/tweets/tweets';

@NgModule({
  declarations: [
    MyApp,
    HamiltonPage,
    BotNetworkPage,
    TweetsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HamiltonPage,
    BotNetworkPage,
    TweetsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
