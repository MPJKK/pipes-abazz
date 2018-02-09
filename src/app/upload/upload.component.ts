import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';
import {Router} from '@angular/router';
import {User} from '../models/user';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  file = new File([''], '');
  formData = new FormData();
  constructor(private mediaService: MediaService, private router: Router) {}
  /*uploadFile() {
    this.formData.append('title', this.file.title);
    this.formData.append('description', this.file.description);
    this.mediaService.uploadMedia(localStorage.getItem('token'), this.formData).subscribe(response => {
      console.log(response);
      setTimeout(() => {this.router.navigate(['front']); }, 1000);
    });
  }*/
  ngOnInit() {
  }

}
