import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Second } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public mctrl : ModalController) {

  }

  launchSecondButton(){ 
  	let secondModal = this.mctrl.create(Second);
  	secondModal.onDidDismiss((result)=>{
  		console.log(result);
  	});
  	secondModal.present();
  	// this.navCtrl.push(Second);
  }

}
