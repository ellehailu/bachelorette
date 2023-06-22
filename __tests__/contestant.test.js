import Contestant from './../src/js/contestant.js';

describe("Contestant and methods",  () => {

    let dude;

    beforeEach(() => {
        dude = new Contestant("Bob", 84, "Salesman");
    });

    test("Make a contestant object", () => {
        // let dude = new Contestant("Bob", 84, "Salesman");
        expect(dude.name).toEqual("Bob");
        expect(dude.age).toEqual(84);
        expect(dude.profession).toEqual("Salesman");
        expect(dude.charisma).toEqual(0);
        expect(dude.strategy).toEqual(0);
        expect(dude.confidence).toEqual(0);
        expect(dude.empathy).toEqual(0);
    });





});