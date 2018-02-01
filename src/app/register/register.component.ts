import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = new User('', '', '');
  constructor() { }

  register() {
    console.log(this.user);
  }
  ngOnInit() {
  }

}