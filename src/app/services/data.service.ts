import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import '../rxjs-operators';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('https://nn-angular-8be2d.firebaseio.com/.json').map(
      (response) => response.json()
    );
  }

}
