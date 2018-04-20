import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginProvider } from '../../providers/login/login';
import { Device } from '@ionic-native/device';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  dataInput: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController,
              private loginSvc: LoginProvider,
              private device: Device) {
    this.dataInput = {};
    console.log(this.device.uuid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(){
    //this.dataInput.device_id = this.device.uuid;
    let res = await this.loginSvc.login(this.dataInput);
    if(res["STATUS"]=='OK'){
      //generate auth code

      //save auth code ke local storage
      //localStorage.setItem('login_key', 'auth-code-sementara');
      
      this.navCtrl.setRoot(TabsPage);
    }else{
      this.alertCtrl.create({
        title:'^_^ Login',
        message: res['MESSAGE'],
        buttons:["OKAY"]
      }).present();
      
    }
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }

}
