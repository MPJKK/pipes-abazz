import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = new User('', '', '');
  constructor(private mediaService: MediaService) { }

  register() {
    console.log(this.user);
    this.mediaService.newUser(this.user).subscribe( response => {
      console.log(response);
    });

  }
  ngOnInit() {
  }

}
