import Figurine from './Interface.Figurine';
export default class Pony extends Figurine {
  #_nb = 1;

  get x() {
    console.log("hello");
    return this.#_nb;
  }

  constructor() {
    super()
    var id = this.#_nb;
    let type = "Pony #X";
    console.log(`
        Pony ${id} is singing -->
        Dou-double poney, j’fais izi money
        D’où tu m’connais ? Parle moi en billets violets
        Dou-double poney, j’fais izi money `);
    this.id++;
  }
  isMoved() {
    console.log("Huuuuuuhu!");
  }
}
