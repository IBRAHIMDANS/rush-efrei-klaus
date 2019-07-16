import Furniture from "../Interfaces/interface.Furniture";
import {DBHeroes} from "../constants/DBHeroes";

export default class ConveyorBell extends Furniture {
    isBusy = false;

    put(obj) {
        if (this.isBusy === true) {
            this.isBusy = true;
            this.content.push(obj);
            console.log("obj is on Coveyorbel");
        } else {
            console.log("Coveyorbel indisponible for moment");
        }
    }

    take() {
        this.isBusy = false;
        console.log(`${this.getName()} is on Coveyorbelt`);
        if (this.content.length === 0) {
            console.log(`${this.getName} is been taken`);
        }
    }

    in() {
        if (this.isBusy === true) {
            const obj = this.getCharacter();
            this.content.push(obj);
            console.log("Coveyorbel indisponible for moment");
        }
        const obj = this.getCharacter();
        this.content.push(obj);
        this.isBusy = true;
        console.log("Coveyorbel indisponible for moment");
    }

    getCharacter() {
        let idRamdom = Math.floor(Math.random() * Math.floor(4));
        const Arraycharacters = ["SANGOKU", "BEJITA", "BEERUS", "KAMESENNIN"];
        return DBHeroes[Arraycharacters[idRamdom]];
    }
}
