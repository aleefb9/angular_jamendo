import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Canciones } from './canciones';

@Injectable({
  providedIn: 'root'
})
export class JamendoService {

  constructor(private http: HttpClient) { }
  
  getMusica(url: string): Observable<Canciones[]> {
    return this.http.get<Canciones[]>(url);
  }
}