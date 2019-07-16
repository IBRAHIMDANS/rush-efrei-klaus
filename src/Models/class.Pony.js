import Toy from "../Interfaces/Interface.Toy";
export default class Pony extends Toy {
  #_nb = 1;
  type;
  constructor() {
    super();
    this.id = this.#_nb;
    this.type = this.getType();
    console.log(`
         ${this.type} is singing -->
        Dou-double poney, j’fais izi money
        D’où tu m’connais ? Parle moi en billets violets
        Dou-double poney, j’fais izi money `);
    this.#_nb++;
  }
  isMoved() {
    console.log("Huuuuuuhu!");
  }
  getType() {
    return `Pony #${this.id}`;
  }
}
