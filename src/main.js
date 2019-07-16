import Pony from "./Models/class.Pony";
import DragonBall from "./Models/class.DragonBall";
import Box from "./Models/class.Box";
import {DBHeroes} from "./constants/DBHeroes";
import Elf from "./Models/class.Elf";
import GiftWrap from "./Models/class.GiftWrap";
import ConveyorBell from "./Models/class.ConveyorBelt";
import Table from "./Models/class.Table";

let pony = new Pony();
let BEJITA = new DragonBall(DBHeroes.BEJITA);
pony.isMoved();
BEJITA.isMoved();

let majdi = new Elf("makibobo");
let box = new Box();
let paper = new GiftWrap();

majdi.Pack(box, BEJITA);
box.Open();
majdi.Pack(box, BEJITA);

majdi.Pack(paper, pony);
majdi.Pack(paper, BEJITA);

const toy = majdi.Unpack(paper);
console.log(toy === pony);
const r = majdi.Unpack(box);
console.log(r == null);
console.log("--- Step 3 ---");
const table = new Table();
const conveyor = new ConveyorBell();
majdi.put(table, pony);
majdi.put(table, BEJITA);
majdi.put(table, box);
majdi.put(table, pony);
majdi.put(table, pony);
majdi.look(table);
//majdi.in(pony)
//majdi.out()
//majdi.look(conveyor);
//majdi.in(conveyor);
//majdi.look(conveyor);
