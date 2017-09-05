import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Tweets } from '../../data/tweets';

import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the TweetsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tweets',
  templateUrl: 'tweets.html',
  providers: [DataProvider]
})
export class TweetsPage {

  title: string;
  tweets: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.title = 'Tweets';
    this.tweets = this.dataProvider.tweets;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TweetsPage');
    // console.log(this.navCtrl.getViews());
  }

}
