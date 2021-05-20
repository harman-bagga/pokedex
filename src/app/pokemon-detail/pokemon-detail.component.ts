import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  constructor(private pokemonApiService: PokemonApiService, private route: Router) { }
  pokemonDetail = {
    name: '',
    image: [] as any,
    weight: '',
    type: '',
    height: '',
    base_experience: '',
    moves: [] as any,
    species: '',
    stats: [] as any,

  };

  ngOnInit(): void {
    this.getPokmeondetail();
  }
// tslint:disable-next-line: typedef
  getImage(url: any) {
    console.log('url=' + url);
    this.pokemonApiService.getDetail(url).subscribe(data => {

      for (const [key, value] of Object.entries(data.sprites)) {
        if (value !== null) {
          this.pokemonDetail.image.push(value);
        }
      }
      // for(let i=0;i< Object.keys(data.sprites).length && i<6 ;i++){
      //   this.pokemonDetail.image.push()
      // }
      // this.pokemonDetail.image=data.sprites
      console.log('data image-' + this.pokemonDetail.image);
    });
  }
// tslint:disable-next-line: typedef
  getPokmeondetail() {
    this.pokemonApiService.getDetail(sessionStorage.link).subscribe(data => {
      // console.log('data-' + data.name);
      this.pokemonDetail.name = data.name;
      this.pokemonDetail.height = data.height;
      this.pokemonDetail.weight = data.weight;
      this.pokemonDetail.base_experience = data.base_experience;
      this.pokemonDetail.moves = data.moves;
      this.pokemonDetail.species = data.species.name,
      this.pokemonDetail.stats = data.stats;



// tslint:disable-next-line: no-shadowed-variable
      Object.keys(data.types).forEach(element => {
          console.log('type-' + data.types[element].type.name);
          this.pokemonDetail.type = this.pokemonDetail.type + ' ' + data.types[element].type.name;
    });

    // for (const [key, value] of Object.entries(data.types)) {

    //   console.log('value-' + value1.name);
    // }
      this.getImage(data.forms[0]?.url);

      console.log('move-' + data.moves[0].move.name);
  });

}


}
