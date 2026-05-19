import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})

export class StatusPipe implements PipeTransform {

  transform(value: any): any {
    switch (value) {
      case true:
        return 'ACTIVO'
      case false:
        return 'INACTIVO'
      case null:
        return null
    }
  }

}
