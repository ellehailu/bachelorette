import Item from "./../src/js/item.js"

describe("inventory items", () => {
    let item;

    beforeEach(() => {
        item = new Item("book", 10, 5)
    })
    test("should build a new item object", () =>{
        expect(item.name).toEqual("book");
        expect(item.monetaryValue).toEqual(10);
        expect(item.connectionPoint).toEqual(5);
    });
});