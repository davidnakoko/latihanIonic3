import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {

  alamatServer = 'http://app.davidnakoko.com/lationic/';
  constructor(public http: HttpClient) {
    console.log('Hello ProductProvider Provider');
  }

  async getProducts(){
    try{
      let result = await this.http.get(this.alamatServer + 'products.php?username=' + localStorage.getItem('username')+'&code='+localStorage.getItem('login_key'))
        .toPromise();
      return result;
    }
    catch(ex){
      return null;
    }
  }

  async saveProduct(data){
    try{
      await this.http.post(this.alamatServer + 'saveProduct.php', 
        JSON.stringify(data) ).toPromise();
    }
    catch(ex){
      
    }
  }

}
