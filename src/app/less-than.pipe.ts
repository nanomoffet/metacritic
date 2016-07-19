import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lessThan'
})
export class LessThanPipe implements PipeTransform {

  transform(value: any, maxValue: number): any {
    return value.filter(games => {
      return parseInt(games.metacriticScore) < maxValue;
    });
  }

}
