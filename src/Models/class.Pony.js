import Toy from "../Interfaces/Interface.Toy";
export default class Pony extends Toy {
  static #_nb = 1;
  type;
  constructor() {
    super();
    this.id = Pony.#_nb;
    this.type = this.getType();
    Pony.#_nb++;
    console.log(`
         ${this.type} is singing -->
        Dou-double poney, j’fais izi money
        D’où tu m’connais ? Parle moi en billets violets
        Dou-double poney, j’fais izi money `);
  }
  isMoved() {
    console.log("Huuuuuuhu!");
  }
  getType() {
    return `Pony #${this.id}`;
  }
}
