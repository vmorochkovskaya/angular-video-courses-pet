import { Pipe, PipeTransform } from '@angular/core';
import {Course} from '../core/entities/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<Course>, ...args: any[]): any {
    array.sort((a: Course, b: Course) => {
      if (new Date(a.date) < new Date(b.date)) {
        return -1;
      } else if (new Date(a.date) > new Date(b.date)) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;  }
}
