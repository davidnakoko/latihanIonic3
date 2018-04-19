import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  dataInput: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private loginSvc: LoginProvider) {
    this.dataInput = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    this.loginSvc.register(this.dataInput);
  }

}
