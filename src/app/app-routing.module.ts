import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexHomeComponent } from './pokedex-home/pokedex-home.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: PokedexHomeComponent,
  },
  {
    path: 'pokemon',
    component: PokemonDetailComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
