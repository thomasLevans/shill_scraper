import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TweetsPage } from '../../pages/tweets/tweets';

/**
 * Generated class for the BotNetworkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bot-network',
  templateUrl: 'bot-network.html',
})
export class BotNetworkPage {

  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = 'Bot Network';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotNetworkPage');
    // console.log(this.navCtrl.getViews());
  }

  goTweets() {
    this.navCtrl.push(TweetsPage);
  }

}
