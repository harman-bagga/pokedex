import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { PokemonApiService } from '../pokemon-api.service';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  // tslint:disable-next-line: quotemark
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = [];

  public radarChartData: ChartDataSets[] = [
    { data: [], label: 'Stats' },

  ];
  public radarChartType: ChartType = 'radar';

  constructor(private pokemonApiService: PokemonApiService, private route: Router) {
  }
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
    statsName: [] as any,
    statsNum: [] as any,

  };

  ngOnInit(): void {
    this.getPokmeondetail();
  }
  // tslint:disable-next-line: typedef
  getImage(url: any) {
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
      data.stats.map((data: any) => {

          this.pokemonDetail.statsNum.push(data.base_stat);
          this.pokemonDetail.statsName.push(data.stat.name);

      });
      this.radarChartLabels = this.pokemonDetail.statsName;
      this.radarChartData[0].data = this.pokemonDetail.statsNum;

      // tslint:disable-next-line: no-shadowed-variable
      Object.keys(data.types).forEach(element => {
        this.pokemonDetail.type = this.pokemonDetail.type + ' ' + data.types[element].type.name;
      });

      // for (const [key, value] of Object.entries(data.types)) {

      //   console.log('value-' + value1.name);
      // }
      this.getImage(data.forms[0]?.url);

    });

  }


}
