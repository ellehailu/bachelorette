export default class Contestant {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.charisma = 0;
        this.strategy = 0;
        this.empathy = 0;
        this.confidence = 0;
    }
    setCharisma() {
        this.charisma += Math.floor(Math.random() * 9) +1;

    }
    setStrategy() {
        this.strategy += Math.floor(Math.random() * 9) +1;
    }
    setConfidence() {
        this.confidence += Math.floor(Math.random() * 9) +1;
    }
}