import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Anime } from '../../providers/anime';
/**
 * Generated class for the Second page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class Second {


  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public viewCtrl:ViewController, public anime : Anime) {

  }

  closeModal(){ 
    this.viewCtrl.dismiss({result : this.anime.animeCharacters});
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Second');
  }

}
