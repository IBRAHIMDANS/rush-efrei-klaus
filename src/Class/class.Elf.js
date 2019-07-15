export default class ELf {
  nickname;
  constructor(nickname) {
    this.nickname = nickname;
  }
  get name() {
    return this.nickname;
  }
  set name(nickname) {
    return (this.nickname = nickname);
  }
  Pack(packaging, toy) {
    if (packaging.isOpen === false) {
      return "Sorry this package is not open";
    } else if (packaging.toy) {
      return "Sorry this package already filled";
    } else {
      return `Yeaaaah! Just packing the toy ~~ ${toy.Type()} ~~`;
    }
  }
  Unpack(packaging) {
    if (packaging.isOpen === true && packaging.toy) {
      return "Sorry this package is already empty";
    } else {
      return `Ooooooh! Just unpacking the toy ~~ ${packaging.toy.Type()} ~~`;
    }
  }
}
