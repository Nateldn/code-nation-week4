class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
    static generatePassword () {
        Math.floor(Math.random()*10000);
    } // Generate a random integer between zero and 10,000
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 

    get certifications() {
        return this._certifications;
    }

    addCertification(newCertification) {
       this._certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays); // Log the number of remaining holidays available to the nurse


  nurseOlynyk.addCertification('Genetics'); //call the .addCertification() method on nurseOlynyk with a parameter of 'Genetics'
console.log(nurseOlynyk.certifications); //Log the value saved to the certifications property of nurseOlynyk


class Doctor extends HospitalEmployee {
    constructor (name, _insurance) {
        super(name);
        this._insurance = true;
    }
}

///If you want extra practice with inheritance, take some time to create a Doctor class that inherits from HospitalEmployee. The properties and methods for the Doctor class are listed below:

// //Doctor
// properties: _name, _remainingVacationDays (set to 20 inside constructor()), _insurance
// methods: .takeVacationDays()