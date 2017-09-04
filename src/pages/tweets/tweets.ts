import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class TweetsPage {

  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = 'Tweets';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TweetsPage');
    // console.log(this.navCtrl.getViews());
  }

}
