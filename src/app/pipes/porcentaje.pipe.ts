import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'porcentaje',
})
export class PorcentajePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return `${value?.toFixed(2)}%`;
  }
}
