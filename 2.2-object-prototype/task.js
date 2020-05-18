function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    } else {  
        const animalSound = animal.sound;
        return animalSound;
    }
}

function getAverageMark(...marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += parseFloat(marks[i]);
    }
    const average = sum / marks.length;
    return Math.round(average);
}

function checkBirthday(birthday) {
    
    const now = Date.now();
    new Date (1900, 0, 1);
    const birthday = new Date.now();
    const diff = now - birthday;
    const age = diff / date.Milliseconds;
    const verdict;
    
    if (age > 18) {
        verdict = "Да";
    } else {
        verdict = "Нет";
    }

return verdict;
}