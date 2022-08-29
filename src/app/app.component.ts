import { Component , OnInit} from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon }  from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  pokemonSelected: Pokemon | undefined;
  
  // title = 'my app';
  ngOnInit() {
      console.table(this.pokemonList);
  
      // console.log(this.getPokemon(this.pokemonList[0]));

      
  }
  getPokemon(pokemonId : string){
    // const index: number = +(event.target as HTMLInputElement).value;
    // const id = +pokemonId;
    const pokemon : Pokemon | undefined= this.pokemonList.find(pokemon => pokemon.id === +pokemonId); 
    if(pokemon){

      console.log(`le pokemon est ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }
    else{
        console.log('le pokemon n existe pas')
        this.pokemonSelected = pokemon
    }






  }

}
