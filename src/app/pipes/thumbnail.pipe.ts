import { Pipe, PipeTransform } from '@angular/core';
import {templateJitUrl} from '@angular/compiler';
import {split} from 'ts-node';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let koko: string;

    function split() {
      const temp = value.split(',');
    }

    // jaa split funktiolla value osiin, tallenna tulos nimellä temp
    switch (split) {
      case (koko = 160):
        args = 'small' ;
      break;
      case (koko = 320):
        args = 'medium' ;
        break;
      case (koko = 640):
        args = 'large' ;
        break;
    }
    // jos args on small, koko = 160, medium = 320, large = 640
    //
     return temp[0] + '-tn' + koko + '.png';
  }

}
