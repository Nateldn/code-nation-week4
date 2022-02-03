// Create Parent Class Cyber Pet 

class MythicalPet {
    constructor(petname, hunger, thirst, /*happiness,*/ energy, takeDrink, eatFood /*temparature*/) { // define parameter of the class object 
      // create key value pairs of i.e. the parent propeties of all Cyber Pet (shared properties and values) 
        this._petname = petname;
        this._hunger = 0;
        this._thirst = 0;
        //this._happiness = 50;
        this._energy = 50;
        this._takeDrink = takeDrink;
        this._eatFood = eatFood;
        //this._temparature = ['hot', 'too warm', 'warm', 'just right', 'cold', 'too cold', 'freezing'];
    }

    get petname() {
      return this._petname;
    }

    get energy() {
      return this._energy;
    }


//    Generate Random Name for Mythical Pet - through a static method 
    static generateName() {
    const names = ['Gregor', 'Spike', 'Buffy', 'Willow', 'Tara', 'Sport', 'Linda', 'Dave'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    return randomName
 
}

}


//================== Create Child Classes ======================//

class Dragon extends MythicalPet {
  constructor(name, fireBreath) {
    super(name);
    this._fireBreath = fireBreath;
  }
}


class Chimera extends MythicalPet {
  constructor (name, roar) {
    super(name);
    this._roar = roar;
  }
}


class Grifin extends MythicalPet {
  constructor (name, treasure) {
    super(name);
    this._treasure = treasure;
  }
}






  //==== Create New Instances of Child Classes =====//






  