import Box from "./class.Box";
export default class ELf {
  #nickname = "";

  constructor(nickname) {
    this.#nickname = nickname;
  }

  getName() {
    console.log(this.#nickname);
    return this.#nickname;
  }

  setName(nickname) {
    return (this.#nickname = nickname);
  }

  Pack(pack, toy) {
    if (pack instanceof Box) {
      if (pack.isOpen === true) {
        if (pack.toy !== null) {
          console.log("Sorry this package already filled");
          //  return "Sorry this package already filled";
        }
        pack.Insert(toy);
        console.log(`Yeaaaah! Just packing the toy ~~ ${toy.getType()} ~~`);
      } else {
        console.log("Sorry this package is not open");
      }
      // return "Sorry this package is not open";
    } else {
      if (pack.toy === null) {
        pack.Insert(toy);
        console.log(`Yeaaaah! Just packing the toy ~~ ${toy.type} ~~`);
      } else {
        console.log("Sorry this package already filled");
      }
      // return `Yeaaaah! Just packing the toy ~~  ~~`;
    }
  }

  Unpack(pack) {
    if (pack.isOpen === true || !pack.toy) {
      console.log("Sorry this package is already empty ! :(");
      return "Sorry this package is already empty ! :(";
    } else {
      //pack.toy.setType = null;
      console.log(`Ooooooh! Just unpacking the toy ~~ ${pack.toy.type} ~~`);
      return `Ooooooh! Just unpacking the toy ~~  ~~`;
    }
  }
  put(furnitures, obj) {
    furnitures.put(obj);
  }

  take() {
    console.log("take")
  }

  look(furnitures) {
    const list = [];
    furnitures.content.forEach(element => {
      list.push(Object.getPrototypeOf(element.constructor).name);
    });
    console.log(list);
  }

  in(conveyor) {
    conveyor.in();
  }
}
