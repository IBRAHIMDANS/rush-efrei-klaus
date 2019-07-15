import Figurine from '../Interfaces/Interface.Figurine';
import { DBHeroes } from '../DBHeroes';

export default class DragonBall extends Figurine {

  #_characters;
    get get_character(){
        return this.#_characters
    }
  constructor(_character){
      super()
    this.#_characters = DBHeroes._character
    var type=  `Dragon Ball figurine ${_character}`
    console.log(`
    ${_character} is singing -->
    CHA-LA HEAD CHA-LA
    Nani ga okite mo kibun wa heno-heno kappa
    CHA-LA HEAD CHA-LA
    Mune ga pachi-pachi suru hodo
    Sawagu Genki-Dama --Sparking !`);
  }
  
  isMoved(){
      console.log("Kamé Hamé Ha!")
  }
}
