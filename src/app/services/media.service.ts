import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class MediaService {

  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(private http: HttpClient) {
  }

  getAllMedia() {
    return this.http.get(this.apiUrl + '/media');
  }
  getNew() {
    return this.http.get(this.apiUrl + '/media?start=0&limit=10');
  }
  newUser(user) {
    return this.http.post(this.apiUrl + '/users', user);
  }
  login(user) {
    return this.http.post(this.apiUrl + '/login', user).subscribe(response => {
      console.log(response);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }
}
