import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-pokedex-home',
  templateUrl: './pokedex-home.component.html',
  styleUrls: ['./pokedex-home.component.css']
})
export class PokedexHomeComponent implements OnInit {

  constructor(private pokemonApiService: PokemonApiService, private route: Router) { }
  pokemonList: any = [];
  showList = true;
  next = '';
  isNext = true;
  isPrev = true;
  prev = '';
  keyword = 'name';
  ngOnInit(): void {

    this.getpokemon();

  }

// tslint:disable-next-line: typedef
  getpokemon(){
    this.isPrev = true;
    this.isNext = true;
    this.showList = false;
    this.pokemonApiService.pokemonList().subscribe(data => {
       // console.log(JSON.stringify(data.results));
        this.pokemonList = data.results;
        this.showList = true;
        this.next = data.next;
        this.prev = data.previous;
        if (this.next === undefined){
          this.isNext = false;
        }
        if (this.prev === undefined){
          this.isPrev = false;
        }
      });
  }

// tslint:disable-next-line: typedef
  pageChange(type: any){
    let url;
    this.isPrev = true;
    this.isNext = true;
    if (type === 'next'){
      url = this.next;
    }
    else{
      url = this.prev;
    }
    this.pokemonApiService.getDetail(url).subscribe(data => {
      this.pokemonList = data.results;
      this.showList = true;
      this.next = data.next;
      this.prev = data.previous;
      if (this.prev === undefined){
        this.isPrev = false;


      }
      if (this.next === undefined){
        this.isNext = false;
      }

    });

  }

// tslint:disable-next-line: typedef
  selectEvent(event: any){
    this.getLink(event.url);
  }
// tslint:disable-next-line: typedef
  getLink(link: any){
    sessionStorage.link = link;
    this.route.navigateByUrl('/pokemon');
  }

}
