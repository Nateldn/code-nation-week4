const generateName = () => {
    const names = ['Gregor', 'Spike', 'Buffy', 'Willow', 'Tara', 'Sport', 'Linda', 'Dave', 'George', 'Tanya', 'Igor', 'Norman', 'Jess', 'Liz', 'Linda'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    return randomName
}
