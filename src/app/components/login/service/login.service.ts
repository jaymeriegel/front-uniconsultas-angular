import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../model/user.interface';
import { Observable } from 'rxjs';

interface LoginResponse {
  data: User;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:3001/login';
  constructor(private http: HttpClient) {}

  public login(user: User): Observable<LoginResponse> {
    let teste = this.http.post<LoginResponse>(this.apiUrl, user);
    console.log(teste)
    return teste;
  }
}