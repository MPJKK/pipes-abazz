import { Pipe, PipeTransform } from '@angular/core';
import {templateJitUrl} from '@angular/compiler';
import {split} from 'ts-node';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    let koko: string;

    const temp = value.split('.');

    // jaa split funktiolla value osiin, tallenna tulos nimellä temp
    switch (args) {
      case ('small'):
        koko = '160';
      break;
      case ('medium'):
        koko = '320' ;
        break;
      case ('large'):
        koko = '640' ;
        break;
    }
    // jos args on small, koko = 160, medium = 320, large = 640
    //
     return temp[0] + '-tn' + koko + '.png';
  }

}
