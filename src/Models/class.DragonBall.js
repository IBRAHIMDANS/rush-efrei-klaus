import Figurine from "../Interfaces/Interface.Figurine";
import { DBHeroes } from "../Constants/DBHeroes";

export default class DragonBall extends Figurine {
  #_characters = "";

  constructor(character) {
    super();
    !character
      ? (this.#_characters = this.getCharacter())
      : (this.#_characters = character);

    this.type = this.getType();
    console.log(`
      ${this.#_characters} is singing -->
      CHA-LA HEAD CHA-LA
      Nani ga okite mo kibun wa heno-heno kappa
      CHA-LA HEAD CHA-LA
      Mune ga pachi-pachi suru hodo
      Sawagu Genki-Dama --Sparking !
    `);
  }
  isMoved() {
    console.log("Kamé Hamé Ha!");
  }
  getCharacter() {
    let idRamdom = Math.floor(Math.random() * Math.floor(4));
    const Arraycharacters = ["SANGOKU", "BEJITA", "BEERUS", "KAMESENNIN"];
    return DBHeroes[Arraycharacters[idRamdom]];
  }
  getType() {
    return `Dragon Ball figurine ${this.#_characters}`;
  }
}
