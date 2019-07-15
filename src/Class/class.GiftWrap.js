import Packaging from "../Interfaces/Interface.Packaging";

export default class GiftWrap extends Packaging {
  isOpen;
  toy;
  constructor() {
    super();
    this.isOpen = false;
    this.toy = null;
  }
  Open() {
    this.isOpen = true;
  }

  Insert(toy) {
    console.log("insert");
  }
}
