import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiTestService {
  private edgeConfigUrl = 'https://api-influ-planner.vercel.app';

  constructor(private http: HttpClient) {}

  apiLoginApp(login: string, senha: string): Observable<any> {
    return this.http.post(`${this.edgeConfigUrl}/pessoas-cadastro`, {
      login: login,
      senha: senha,
    });
  }
}
