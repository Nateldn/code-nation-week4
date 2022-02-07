//    Generate Random Name for Mythical Pet - through a static method 
const generateName =() => {
    const names = ['Gregor', 'Spike', 'Buffy', 'Willow', 'Tara', 'Sport', 'Linda', 'Dave', 'George', 'Tanya', 'Igor', 'Norman', 'Jess', 'Liz', 'Linda', 'Fluffy', "Tiddles"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    console.log(randomName);
   
}


