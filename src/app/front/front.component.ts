import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
  mediaArray: any;

  constructor(public mediaService: MediaService) { }

  ngOnInit() {
    if (localStorage.getItem('token') !== null) {
      this.mediaService.getUserData(localStorage.getItem('token')).
          subscribe(response => {
            console.log(response);
            this.mediaService.logged = true;
          }, (error: HttpErrorResponse) => {
            console.log(error);
          });
    }

    this.mediaService.getNew().subscribe(data => {
      console.log(data);
      this.mediaArray = data;
    });
  }

}

