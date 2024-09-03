import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCard',
})
export class TitleCardPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0, 50) + '...';
  }
}
