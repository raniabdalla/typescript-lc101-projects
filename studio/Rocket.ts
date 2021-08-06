import { Astronaut } from './Astronaut';
import { Payload } from './Payload';
import {Cargo} from './Cargo';

export class Rocket {
    // properties and methods
    name : string;
    totalCapacityKg  : number;
    cargoItems : Cargo[] =[];
    astronauts : Astronaut[] =[];
    constructor(name : string, totalCapacityKg: number,  ) {
        this.name = name;
        this.totalCapacityKg  = totalCapacityKg;
    }
    
    sumMass( items: Payload[] ): number {
       let  summass = 0;
        for (let i=0; i < items.length; i++){
            summass += items[i].massKg;
           return summass;
        } 
    }
    
    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
    }

    canAdd(item: Payload): boolean {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }
 
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
          this.cargoItems.push(cargo);
          return true;
        }else {
            return false;
        }
    }
   
    addAstronaut(astronaut: Astronaut): boolean{
       return true;
    }
 }