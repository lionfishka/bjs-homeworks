class Weapon {
    constructor() {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }

    takeDamage(damage) {
        durability = this.durability - damage;
    }

    getDamage() {
        if (durability===0) {
            return 0;
        } else if (durability >= (this.durability*0,3)) {
            return this.attack;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        if (durability===0) {
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
    constructor() {
        this.name = 'Рука';
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1;
    }
}

class Bow extends Weapon {
    constructor() {
        this.name = 'Лук';
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
    }
}

class Sword extends Weapon {
    constructor() {
        this.name = 'Меч';
        this.attack = 25;
        this.durability = 500;
        this.range = 1;
    }
}

class Knife extends Weapon {
    constructor() {
        this.name = 'Нож';
        this.attack = 5;
        this.durability = 300;
        this.range = 1;
    }
}

class Staff extends Weapon {
    constructor() {
        this.name = 'Посох';
        this.attack = 8;
        this.durability = 300;
        this.range = 2;
    }
}

class LongBow extends Bow {
    constructor() {
        super(durability);
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super(range);
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}

class StormStaff extends Staff {
    constructor() {
        super(durability);
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}