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
    let result = await this.http.get(this.alamatServer + 'products.php')
      .toPromise();
    return result;
  }

  async saveProduct(data){
    await this.http.post(this.alamatServer + 'saveProduct.php', 
      JSON.stringify(data) ).toPromise();
  }

}
