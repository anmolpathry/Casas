import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InformacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})
export class InformacionPage {

  Casa = '';
  favoritos = [];



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Casa= this.navParams.get('Casa');
    this.favoritos = this.navParams.get('favoritos');

  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionPage');
  }

  ClickFavoritos(){
  this.favoritos.push(
    this.Casa
  );
  this.navCtrl.pop();

  }

}
