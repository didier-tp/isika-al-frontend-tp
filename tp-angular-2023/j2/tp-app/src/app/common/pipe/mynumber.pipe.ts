import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mynumber'
})
export class MynumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let x = <number> value; //ex: 5.55555
    let param = <string> args[0]; //ex: '1.0-2'
    let maxFractionDigit = Number(param.split('-')[1]); //version améliorable
    return x.toFixed(maxFractionDigit);
  }

}
