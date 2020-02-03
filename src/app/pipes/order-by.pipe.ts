import { Pipe, PipeTransform } from '@angular/core';
import {Course} from '../core/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<Course>, ...args: any[]): any {
    array.sort((a: Course, b: Course) => {
      if (new Date(a.creationDate) < new Date(b.creationDate)) {
        return -1;
      } else if (new Date(a.creationDate) > new Date(b.creationDate)) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;  }
}
