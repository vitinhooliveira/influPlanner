import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiTestService {

  private edgeConfigUrl = 'localhost:3000/welcome'; // Substitua com a URL da sua configuração

  constructor(private http: HttpClient) {}

  apiTestInflu():Observable<any> {
    return this.http.get(this.edgeConfigUrl);
  }
}
