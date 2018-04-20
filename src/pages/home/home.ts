import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listItems: any[] ;
  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController, 
              public loadingCtrl: LoadingController, 
              private productSvc: ProductProvider) 
  {
    this.listItems = [];

    let login_key = localStorage.getItem("login_key");
    if(!login_key){
      this.navCtrl.setRoot('LoginPage');
      return;
    }

    this.loadData();
  }

  async loadData(){
    let loading = this.loadingCtrl.create({
      content: 'Loading data product'
    });
    loading.present();
    let result = await this.productSvc.getProducts();
    if(result['STATUS']=='OK'){
      this.listItems = result['RESULT'];
    }else{
      this.navCtrl.setRoot('LoginPage');
    }
    loading.dismiss();
  }

  tambah(){
    let prompt = this.alertCtrl.create({
      title : 'Input Product Baru',
      inputs : [{
        name : 'nama',
        placeholder : 'Nama Product'
      },{
        name : 'harga',
        placeholder : 'Harga Product',
        type : 'number'
      }],
      buttons: [{
        text : 'Cancel'
      },{
        text : 'Save',
        handler : (data)=>{
          this.simpan(data);
        }
      }]
    });
    prompt.present();
  }

  async simpan(data){
    await this.productSvc.saveProduct(data);
    this.loadData();
  }

  hapus(item){
    this.listItems.splice(this.listItems.indexOf(item),1);
  }
  
}
