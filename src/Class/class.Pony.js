import Toy from "../Interfaces/Interface.Toy";
export default class Pony extends Toy {
  #_nb = 1;

  constructor() {
    super();
    let id = this.#_nb;
    let type = `Pony ${id++}`;
    console.log(`
         ${type} is singing -->
        Dou-double poney, j’fais izi money
        D’où tu m’connais ? Parle moi en billets violets
        Dou-double poney, j’fais izi money `);
  }
  isMoved() {
    console.log("Huuuuuuhu!");
  }

}
