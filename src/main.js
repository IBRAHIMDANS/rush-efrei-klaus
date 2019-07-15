import Pony from "./Class/class.Pony";
import DragonBall from "./Class/class.DragonBall";
import Box from "./Class/class.Box";
import { DBHeroes } from "./DBHeroes";
import Elf from "./Class/class.Elf";
import GiftWrap from "./Class/class.GiftWrap";

let pony = new Pony();
let BEJITA = new DragonBall(DBHeroes.BEJITA);
let majdi = new Elf("makibobo");
let box = new Box();

majdi.Pack(box, BEJITA);
box.Open();
majdi.Pack(box, BEJITA);
let paper = new GiftWrap();
majdi.Pack(paper, pony);
majdi.Pack(paper, pony);
let toy= majdi.Unpack(paper)
console.log(toy)
var toyy= majdi.Unpack(paper)
console.log(toyy)
pony.isMoved();
BEJITA.isMoved();
