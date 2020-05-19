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
    
    const birthdayDate = new Date(birthday);
    const now = Date.now();
    // const birthday = new Date.now();
    const diff = now - (+birthdayDate);
    // const diff = now - birthday;
    const age = diff / (365.25 * 24 * 3600 * 1000);
    
    if (age >= 18) {
        verdict = "Да";
    } else if (age < 18) {
        verdict = "Нет";
    }

return verdict;
// return age >= 18;
}