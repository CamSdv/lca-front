import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricingType',
  standalone: true
})
export class PricingTypePipe implements PipeTransform {

  transform(value: any): any {
    switch (value) {
      case 'UNIT':
        return 'UNIDAD'
      case 'WEIGHT':
        return 'PESO'
      case null:
        return null
    }
  }

}
