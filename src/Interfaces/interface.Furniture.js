export default class Furniture {
    content = [];

    put() {
    }

    take() {
    }

    getName(obj = "") {
        if (obj) {
            return Object.getPrototypeOf(obj.constructor).name;
        }
        var objs;
        this.content.map(
            item => (objs = Object.getPrototypeOf(item.constructor).name)
        );
    }
}
