export default class Packaging {
    isOpen = false;
    toy = null;

    Open() {
        this.isOpen = true;
    }

    Insert(toy) {
        this.toy = toy;
        this.isOpen = false;
    }
}
