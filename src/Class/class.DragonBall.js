import Figurine from './Interface.Figurine';

const DBHeroes = {
  SANGOKU: "SANGOKU",
  BEJITA: "BEJITA",
  BEERUS: "BEERUS",
  KAMESENNIN: "KAMESENNIN"
};

class DragonBall extends Figurine {
  #_character = DBHeroes;
  constructor(_character){
    this._character = #_character
    var type=  `Dragon Ball figurine ${this._character}`
    console.log(`
    ${this._character} is singing -->
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
