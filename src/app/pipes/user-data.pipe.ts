import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userData'
})
export class UserDataPipe implements PipeTransform {

  transform(value:any, args?: any): any {
    return value.info.data;
  }

}
