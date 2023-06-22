import Contestant from './../src/js/contestant.js';

describe("Contestant and methods",  () => {

    let dude;

    beforeEach(() => {
        dude = new Contestant("Bob", 84, "Salesman");
    });

    test("Make a contestant object", () => {
        expect(dude.name).toEqual("Bob");
        expect(dude.age).toEqual(84);
        expect(dude.profession).toEqual("Salesman");
        expect(dude.charisma).toEqual(0);
        expect(dude.strategy).toEqual(0);
        expect(dude.confidence).toEqual(0);
        expect(dude.empathy).toEqual(0);
    });
    test("set charisma to object", () => {
        dude.setCharisma();
        expect(dude.charisma).toBeLessThanOrEqual(10);
        expect(dude.charisma).toBeGreaterThanOrEqual(1);
    })
    test("set strategy to object", () => {
        dude.setStrategy();
        expect(dude.strategy).toBeLessThanOrEqual(10);
        expect(dude.strategy).toBeGreaterThanOrEqual(1);
    })
    // test("set confidence to object", () => {
    //     dude.setConfidence();
    //     expect(dude.charisma).toBeLessThanOrEqual(10);
    //     expect(dude.charisma).toBeGreaterThanOrEqual(1);
    // })




});