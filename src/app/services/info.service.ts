import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { infoPagina } from '../interfaces/infopag';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info: infoPagina={
  };

  constructor(private http: HttpClient ) { }

    getInfoPagina(){
      return this.http.get('assets/data/infoPag.json');
    }
    getInfoEquipo(){
      return this.http.get('https://smartcityporfolio-default-rtdb.firebaseio.com/equipo.json');
    }
    
}
