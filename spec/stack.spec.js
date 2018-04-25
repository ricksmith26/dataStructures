const {
  createStack,
  addToStack,
  popFromStack,
  dequeFromStack,
  isEmpty,
  getSize,
  uniqPush
} = require("../data-structures/stack.js");
const { expect } = require("chai");

describe("createStack", () => {
  it("creates an instance with a quantity property set to 0", () => {
    const inputStack = createStack();
    const actual = inputStack.quantity;
    const expected = 0;
    expect(actual).to.equal(expected);
  });
  it("creates an instance with a storage property set to an empty object", () => {
    const inputStack = createStack();
    const actual = inputStack.storage;
    const expected = {};
    expect(actual).to.eql(expected);
  });
  it("returns the storage with the added element", () => {
    const inputStack = createStack();
    inputStack.addToStack("funcCreateStack");
    const actual = inputStack.storage;
    const expected = { 1: "funcCreateStack" };
    expect(actual).to.eql(expected);
  });
  it("returns the storage with the added element", () => {
    const inputStack = createStack();
    inputStack.addToStack("hello");
    inputStack.addToStack("next item");
    inputStack.addToStack("last item");
    const actual = inputStack.storage;
    const expected = { 1: "hello", 2: "next item", 3: "last item" };
    expect(actual).to.eql(expected);
  });
});
describe("Queue", () => {
  it("popFromStack: removes the last element from an array and returns the object", () => {
    const inputStack = createStack();
    inputStack.addToStack("funcCreateStack");
    inputStack.addToStack("2ndfuncCreateStack");
    inputStack.popFromStack();
    const actual = inputStack.storage;
    const expected = { "1": "funcCreateStack" };
    expect(actual).to.eql(expected);
  });
  it("dequeFromStack: removes the first element from an array and returns the object", () => {
    const inputStack = createStack();
    inputStack.addToStack("funcCreateStack");
    inputStack.addToStack("2ndfuncCreateStack");
    inputStack.dequeFromStack();
    const actual = inputStack.storage;
    const expected = { "2": "2ndfuncCreateStack" };
    expect(actual).to.eql(expected);
  });
  it("dequeFromStack: removes the first element from an array and returns the object", () => {
    const inputStack = createStack();
    inputStack.addToStack("funcCreateStack");
    inputStack.addToStack("2ndfuncCreateStack");
    inputStack.addToStack("final");
    inputStack.dequeFromStack();
    inputStack.dequeFromStack();
    const actual = inputStack.storage;
    const expected = { "3": "final" };
    expect(actual).to.eql(expected);
  });
  it("isEmpty: returns true if no more items can be dequeued and there is no front item", () => {
    const inputStack = createStack();
    inputStack.isEmpty();
    const actual = inputStack.isEmpty();
    expect(actual).to.be.true;
  });
  it("isEmpty returns false if no more items can be dequeued and there is no front item", () => {
    const inputStack = createStack();
    inputStack.addToStack("funcCreateStack");
    inputStack.addToStack("funcCreateStack");
    inputStack.isEmpty();
    const actual = inputStack.isEmpty();
    expect(actual).to.be.false;
  });
  it("getSize: returns the total items in the queue", () => {
    const inputStack = createStack();
    inputStack.addToStack("funcCreateStack");
    inputStack.addToStack("2ndfuncCreateStack");
    inputStack.getSize();
    const actual = inputStack.quantity;
    const expected = 2;
    expect(actual).to.eql(expected);
  });
});
/*xdescribe("Sets", () => {
  it("popFromStack: removes the last element from an array and returns the object", () => {
    const inputStack = createStack();
    inputStack.addToStack("funcCreateStack");
    inputStack.addToStack("2ndfuncCreateStack");
    inputStack.popFromStack();
    const actual = inputStack.storage;
    const expected = { "1": "funcCreateStack" };
    expect(actual).to.eql(expected);
  });*/
