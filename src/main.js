import Pony from "./Class/class.Pony";
import DragonBall from "./Class/class.DragonBall";
import Box from "./Class/class.Box";
import { DBHeroes } from "./constants/DBHeroes";
import Elf from "./Class/class.Elf";
import GiftWrap from "./Class/class.GiftWrap";
import ConveyorBell from "./Class/class.ConveyorBelt";
import Table from "./Class/class.Table";

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

majdi.Unpack(paper);
majdi.Unpack(box);
const table = new Table();
const conveyor = new ConveyorBell();
majdi.put(table, pony);
majdi.put(table, BEJITA);
majdi.put(table, box);
majdi.look(table);
majdi.in(conveyor);
majdi.look(conveyor);
