export default class Contestant {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.charisma = 0;
        this.strategy = 0;
        this.empathy = 0;
        this.confidence = 0;
        this.connection = 0;
    }
    setCharisma() {
        this.charisma += Math.floor(Math.random() * 9) +1;
        return this.charisma;
    }
    setStrategy() {
        this.strategy += Math.floor(Math.random() * 9) +1;
    }
    setConfidence() {
        this.confidence += Math.floor(Math.random() * 9) +1;
    }
    setEmpathy() {
        this.empathy += Math.floor(Math.random() * 9) +1;
    }
    dates() {
        console.log(this.charisma);
        if (this.charisma >9 || this.strategy >9 || this.empathy >9 || this.confidence > 9) {
            this.connection += Math.floor(Math.random() * 3) +1;
            console.log(this.connection);
        } else {
            this.connection += -1;
        }
    }
    levelUp(){
        // this.charisma += 1;
        // this.confidence += 1;
        // this.empathy += 1;
        // this.strategy += 1;
    }
}