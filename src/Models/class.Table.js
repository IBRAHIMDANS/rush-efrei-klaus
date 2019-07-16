import Furniture from '../Interfaces/interface.Furniture';

export default class Table extends Furniture {
    take(){
        this.content.pop()
    }
    take(index) {}
    put(obj){
        (this.content.length >= 10 ) 
        ?
        console.log("Hoho it's too heavy, I can only have 10 objects maximum ")
        : 
        this.content.push(obj)
        console.log(`${obj.type} is on Table`);
        
    }
}