import Furniture from "../Interfaces/interface.Furniture";
import { DBHeroes } from "../constants/DBHeroes";

export default class ConveyorBell extends Furniture {
  isBusy;
  constructor() {
    super();
    this.isBusy = false;
  }
  put(obj) {
    if (this.isBusy) {
      this.isBusy = true;
      this.content.push(obj);
      console.log("obj is on Coveyorbel");
    } else {
      console.log("Coveyorbel indisponible for moment");
    }
  }
  take() {
    this.isBusy = false;
  }
  in() {
    if (!this.isBusy) {
      const obj = this.getCharacter();
      this.content.push(obj);
    } else {
      console.log("Coveyorbel indisponible for moment");
    }
  }
  getCharacter() {
    let idRamdom = Math.floor(Math.random() * Math.floor(4));
    const Arraycharacters = ["SANGOKU", "BEJITA", "BEERUS", "KAMESENNIN"];
    return DBHeroes[Arraycharacters[idRamdom]];
  }
}
