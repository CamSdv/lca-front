import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryMovement } from 'src/app/shared/models/inventory-movement.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KardexService {

  http = inject(HttpClient);

  api = environment.url + '/inventory/movements';

  getMovements(supplyId?: number): Observable<InventoryMovement[]> {

    let params = new HttpParams();

    if (supplyId) {
      params = params.set('supplyId', supplyId);
    }

    return this.http.get<InventoryMovement[]>(this.api, { params });
  }

}
