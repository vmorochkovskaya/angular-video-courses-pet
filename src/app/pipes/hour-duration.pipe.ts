import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'hourDuration',
  pure: false
})
export class HourDurationPipe implements PipeTransform {

  transform(value: any): any {
    if (value != null) {
    let minutes: any;
    let hours: any;
    minutes = Math.floor(value % 60);
    hours = Math.floor(value / 60);
    return this.format(minutes, hours);
  }
    return value;
  }

  private format(minutes, hours) {
    // tslint:disable-next-line:triple-equals
    if (hours == 0) {
      return `${minutes}min`;
    }
    return `${hours}h ${minutes}min`;
  }
}
