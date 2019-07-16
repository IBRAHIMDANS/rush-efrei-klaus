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
                pack.Insert(toy);
                console.log(`Yeaaaah! Just packing the toy ~~ ${toy.getType()} ~~`);
                return;
            }
        }
        if (pack.toy !== null) {
            console.log("Sorry this package already filled");
            return;
        }
        pack.Insert(toy);

        console.log(`Yeaaaah! Just packing the toy ~~ ${toy.type} ~~`);
        return toy;
    }

    Unpack(pack) {
        if (pack instanceof Box) {
            if (pack.isOpen === true || !pack.toy) {
                console.log("Sorry this package is already empty ! :(");
                return;
            }
        }
        if (pack.toy === null) {
            console.log("Sorry this package is already empty ! :(");
            return;
        }
        console.log(`Ooooooh! Just unpacking the toy ~~ ${pack.toy.type} ~~`);
        pack.toy = null;

    }

    put(furnitures, obj) {
        furnitures.put(obj);
    }

    take() {
        console.log("take");
        this.furnitures.take();
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

    out(furnitures) {
        furnitures.out();
    }
}
