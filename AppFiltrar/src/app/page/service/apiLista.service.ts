import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  urlC = 'http://localhost:3001/api/v1/getCursos/'
  urlE = 'http://localhost:3001/api/v1/getCursos/'

  constructor(private http: HttpClient) { }

  getCursos(){ 
    return this.http.get<any>(this.urlC)
  }

  getEstudiantes(){ 
    return this.http.get<any>(this.urlE)
  
  }
}