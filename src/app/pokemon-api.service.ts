import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private http: HttpClient) { }
  header = {
    headers: new HttpHeaders({
      'Content-Type'  : 'application/json',
      responseType  : 'json',

    }),
  };
  
  pokemonList(){
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/', this.header);
  }
  getDetail(url: any){
    return this.http.get<any>(url, this.header);
  }
}
