function addToStack(item) {
  this.storage[++this.quantity] = item;
}

function popFromStack() {
  delete this.storage[this.quantity];
  --this.quantity;
}

function dequeFromStack() {
  delete this.storage[this.frontCount];
  --this.quantity;
  ++this.frontCount;
}

function isEmpty() {
  if (this.quantity === 0) {
    return true;
  } else return false;
}

function getSize() {
  return this.quantity;
}

function uniqPush(item) {
  if (!this.storage.includes(item)) this.storage[++this.quantity] = item;
}

function createStack() {
  // build your stack object and its methods inside this factory function
  let setStack = {};
  setStack.quantity = 0;
  setStack.frontCount = 1;
  setStack.storage = {};
  setStack.addToStack = addToStack;
  setStack.popFromStack = popFromStack;
  setStack.dequeFromStack = dequeFromStack;
  setStack.isEmpty = isEmpty;
  setStack.getSize = getSize;
  return setStack;
}

const myStack = createStack();

myStack.addToStack("funcCreateStack");

module.exports = {
  createStack,
  addToStack,
  popFromStack,
  dequeFromStack,
  isEmpty,
  getSize,
  uniqPush
};

/*function addToBasket(item1, item2) {
  this.basket[++this.quantity] = item1;
  this.basket[++this.quantity] = item2;
}

function createAccount(name, country, accountNo) {
  const newAccount = {};
  newAccount.name = name;
  newAccount.country = country;
  newAccount.accountNo = accountNo;
  newAccount.basket = {};
  newAccount.quantity = 0;
  newAccount.addToBasket = addToBasket;
  return newAccount;
}

const mitchAccount = createAccount('mitch', 'UK', '123123');
const JDAccount = createAccount('JD', 'UK', '424242');

// IMPLICIT BINDING
// JDAccount.addToBasket('guitar');
// mitchAccount.addToBasket('piano');
// console.log(mitchAccount.basket);*/
