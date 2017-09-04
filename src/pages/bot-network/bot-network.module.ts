import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BotNetworkPage } from './bot-network';

@NgModule({
  declarations: [
    BotNetworkPage,
  ],
  imports: [
    IonicPageModule.forChild(BotNetworkPage),
  ],
})
export class BotNetworkPageModule {}
