class Weapon {
    constructor(obj) {
        this.name = obj.name;
        this.attack = obj.attack;
        this.durability = obj.durability;
        this.range = obj.range;
        this.startDurability = obj.durability;
    }

    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability===0) {
            return 0;
        } else if (this.durability >= (this.startDurability*0,3)) {
            return this.attack;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        if (this.durability===0) {
            return true;
        } else {
            return false;
        }
    }
}

const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const khife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);
const longBow = new Weapon('Длинный лук', 15, 200, 4);
const axe = new Weapon('Секира', 27, 800, 1);
const stormStaff = new Weapon('Посох Бури', 10, 300, 3);


class Arm extends Weapon {
    constructor(obj) {
        super(Object.assign({
            name = 'Рука',
            attack = 1,
            durability = Infinity,
            range = 1,
        }, obj));  
    }
}

class Bow extends Weapon {
    constructor(obj) {
        super(Object.assign({
            name = 'Лук',
            attack = 10,
            durability = 200,
            range = 3,
        }, obj));  
    }
}

class Sword extends Weapon {
    constructor(obj) {
        super(Object.assign({
            name = 'Меч',
            attack = 25,
            durability = 500,
            range = 1,
        }, obj));  
    }
}

class Knife extends Weapon {
    constructor(obj) {
        super(Object.assign({
            name = 'Нож',
            attack = 5,
            durability = 300,
            range = 1,
        }, obj));  
    }
}

class Staff extends Weapon {
    constructor(obj) {
        super(Object.assign({
            name = 'Посох',
            attack = 8,
            durability = 300,
            range = 2,
        }, obj));  
    }
}

class LongBow extends Bow {
    constructor(obj) {
        super(Object.assign({
            name = 'Длинный лук',
            attack = 15,
            range = 4,
        }, obj));  
    }
}

class Axe extends Sword {
    constructor(obj) {
        super(Object.assign({
            name = 'Секира',
            attack = 27,
            durability = 800,
        }, obj));  
    }
}

class StormStaff extends Staff {
    constructor(obj) {
        super(Object.assign({
            name = 'Посох Бури',
            attack = 10,
            range = 3,
        }, obj));  
    }
}

// class Bow extends Weapon {
//     constructor(obj) {
//         this.name = 'Лук';
//         this.attack = 10;
//         this.durability = 200;
//         this.range = 3;
//     }
// }

// class Sword extends Weapon {
//     constructor(obj) {
//         this.name = 'Меч';
//         this.attack = 25;
//         this.durability = 500;
//         this.range = 1;
//     }
// }

// class Knife extends Weapon {
//     constructor(obj) {
//         this.name = 'Нож';
//         this.attack = 5;
//         this.durability = 300;
//         this.range = 1;
//     }
// }

// class Staff extends Weapon {
//     constructor(obj) {
//         this.name = 'Посох';
//         this.attack = 8;
//         this.durability = 300;
//         this.range = 2;
//     }
// }

// class LongBow extends Bow {
//     constructor(obj) {
//         super(durability);
//         this.name = 'Длинный лук';
//         this.attack = 15;
//         this.range = 4;
//     }
// }

// class Axe extends Sword {
//     constructor(obj) {
//         super(range);
//         this.name = 'Секира';
//         this.attack = 27;
//         this.durability = 800;
//     }
// }

// class StormStaff extends Staff {
//     constructor(obj) {
//         super(durability);
//         this.name = 'Посох Бури';
//         this.attack = 10;
//         this.range = 3;
//     }
// }