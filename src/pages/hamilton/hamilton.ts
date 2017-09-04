import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BotNetworkPage } from '../../pages/bot-network/bot-network';

import { TrendingUrls } from '../../data/trending_urls';

/**
 * Generated class for the HamiltonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hamilton',
  templateUrl: 'hamilton.html',
})
export class HamiltonPage {

  title: string;
  trendingUrls: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = 'Hamilton68';
    this.trendingUrls = TrendingUrls;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HamiltonPage');
    console.log(this.trendingUrls);
  }
  
  goBotNetwork() {
    this.navCtrl.push(BotNetworkPage);
  }

}
