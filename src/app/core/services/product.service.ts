import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = environment.url + '/products'

  constructor(
    private readonly http: HttpClient
  ) { }

  getAll() {
    return this.http.get<any>(this.api)
  }

}
