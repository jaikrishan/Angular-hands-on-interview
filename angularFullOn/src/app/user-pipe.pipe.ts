import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userPipe'
})
export class UserPipePipe implements PipeTransform {

  // transform(value: number, args: string): any {
  transform(value: number): any {
    // if(args === 'male') {
    //   return 'Mr ' + value
    // }
    // else {
    //   return 'Mrs ' + value
    // }
    return (value/1024).toFixed(1) + 'MB';
  }
}
