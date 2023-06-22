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
        expect(dude.connection).toEqual(0);
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
    test("set strategy to object", () => {
        dude.setConfidence();
        expect(dude.confidence).toBeLessThanOrEqual(10);
        expect(dude.confidence).toBeGreaterThanOrEqual(1);
    })
    test("set strategy to object", () => {
        dude.setEmpathy();
        expect(dude.empathy).toBeLessThanOrEqual(10);
        expect(dude.empathy).toBeGreaterThanOrEqual(1);
    })
    test("set connection value to object", () =>{
        dude.setEmpathy();
        dude.setConfidence();
        dude.setStrategy();
        dude.setCharisma();
        dude.dates();
        expect(dude.connection).toBeGreaterThanOrEqual(-1);
    })
    test("should level up the contestant", () =>{
        dude.levelUp();
        expect(dude.charisma).toEqual(1);
        expect(dude.strategy).toEqual(1);
        expect(dude.empathy).toEqual(1);
        expect(dude.confidence).toEqual(1);
    })
    });