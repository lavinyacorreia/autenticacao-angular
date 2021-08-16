import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hora'
})
export class HoraPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const dataHora = value.split(' ');

    return dataHora[1];
  }

}
