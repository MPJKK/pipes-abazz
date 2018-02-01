import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../models/user';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User('', '');
  constructor(private mediaService: MediaService) { }
  login() {
    console.log(this.user);
    this.mediaService.newUser(this.user).subscribe( response => {
      console.log(response);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });

  }
  ngOnInit() {
  }

}
