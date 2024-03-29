import {Pipe, PipeTransform} from '@angular/core';
import {Course} from '../core/entities/course';

@Pipe({
  name: 'filterCourseByName'
})
export class FilterCourseByNamePipe implements PipeTransform {

  transform(array: any[], filter: string): any {
    if (filter !== null && filter.length > 0) {
      // tslint:disable-next-line:no-shadowed-variable
      return array.filter((item: Course) => item.name.indexOf(filter) >= 0);
    }
    return array;
  }
}
