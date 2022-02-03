// // class Cars {
// //     constructor(name) {
// //         this._registration = registration;
// //         this._numberOfHoursParked = 0;
// //         this._hoursStayed = 0.00;
// //     }
// //     get registration()  {
// //         return this._registration;
// //     }
// //     get numberOfHoursParked() {
// //        return this._numberOfHoursParked;
// //     }
// //     get hoursStayed() {
// //         return this._hoursStayed;
// //     }
// // }

// // console.log(Cars);

// // const CX32XWN = new Cars("CX32XWN");

// // let costPerHour = 1.50;
// // let priceToPay = numberOfHoursParked * costPerHour;


// //solution 

// class Car{
//     constructor(regnum){
//         this._regnum = regnum;
//         this._hours = 0;
//         this._charge = 0.00;
//     }
//     get regnum(){
//         return this._regnum;
//     }
//     get hours(){
//         return this._hours;
//     }
//     get charge(){
//         return this._charge;
//     }
//     increaseHours(){
//         this._hours++;
//         this._charge += 1.50;
//     }
// }
// const pay = (reg, hr) => {
//     const car = new Car(reg);
//     for (i = 0; i < hr; i++){
//         car.increaseHours();

//     }
//           return `You need to pay £${car.charge} for ${car.hours} hours.`;
//     }
//     console.log(pay("M7 CAR", 5)); //Output: You need to pay £7.5 for 5 hours.

let total = 0;
for (let n = 9; n >= 6; n -= 1) {
  total *= 10;
  total += 1;
}
 

