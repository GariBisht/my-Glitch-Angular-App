import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'awesome' })

//Custom Pipe Example 
/** Precede the input string with the word "Awesome " */
export class AwesomePipe implements PipeTransform {
  transform(phrase: string) {
    return phrase ? 'Hii Beautiful' + '  '+ phrase : '';
  }
}
