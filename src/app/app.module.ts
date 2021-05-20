import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokedexHomeComponent } from './pokedex-home/pokedex-home.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PokedexHomeComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    AutocompleteLibModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
