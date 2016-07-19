import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {

  transform(value: any[], minScore: number, maxScore: number): any[] {
    if (!value) return [];
    return value.filter(games => {
      return parseInt(games.metacriticScore) >= minScore;
    });
  }

}
