
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private corsHeaders: HttpHeaders = new HttpHeaders();
  private baseURL = 'http://localhost:5050/api/v2/users';
  constructor(private httpClient: HttpClient) {
    this.corsHeaders= new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
    });  }
  // getUserList(): Observable<User[]> {
  // return this.httpClient.get<User[]>(`${this.baseURL}`);
  // }
  // createUser(user: User): Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}`,user);

  // }
  matchUserById(user: string, password:string): Observable<User>{
    
    return this.httpClient.get<User>(`${this.baseURL}/${user}/${password}`);
    console.log(user, password)
  }

  // updateEmploy(id: number, employ: User): Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/${id}`,User);
  // }
  // deleteEmploy(id: number): Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL}/${id}`);
  // }
}