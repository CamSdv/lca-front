import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class OrderService {

  api = environment.url + '/orders'

  constructor(
    private readonly http: HttpClient
  ) { }

  create(order: any) {
    return this.http.post(this.api, order)
  }

  getAll() {
    return this.http.get<any>(this.api)
  }

  update(id: number, order: any) {
    return this.http.put(`${this.api}/${id}`, order)
  }

  updateWeights(id: number, weights: any[]) {
    return this.http.put(`${this.api}/${id}/weights`, weights)
  }

  confirm(id: number) {
    return this.http.put(`${this.api}/${id}/confirm`, {})
  }
}