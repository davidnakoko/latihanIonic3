import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  alamatServer = 'http://app.davidnakoko.com/lationic/';
  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  async register(data){
    try{
      let result = await this.http.post(this.alamatServer + 'register.php', 
        JSON.stringify(data) ).toPromise();
      if(result['STATUS']=='OK'){
        //generate auth code

        //save auth code local storage
      }
    }
    catch(ex){

    }
  }

  async login(data){
    let result = await this.http.post(this.alamatServer + 'login.php', 
      JSON.stringify(data)).toPromise();
    return result;
  }


}
