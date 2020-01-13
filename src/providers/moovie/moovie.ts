import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {


  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatesMovies() {
    return this.http.get(API_CONFIG.baseUrl + "/movie/popular?api_key=" + API_CONFIG.ApiKey);
  }

}
