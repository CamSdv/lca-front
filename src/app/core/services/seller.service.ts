import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  api = environment.url + '/sellers'

  constructor(
    private readonly http: HttpClient
  ) { }

  getAll() {
    return this.http.get<any>(this.api)
  }

  updateSatus(id: number, status: boolean): Observable<any>{
    return this.http.put<any>(`${this.api}/${id}/${'status'}/${status}`, Optional)
  }
  
  create(request: any){
    return this.http.post<any>(this.api, request)
  }

}
