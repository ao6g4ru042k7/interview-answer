class Node {
  constructor(value, nextNode, prevNode) {
    this.value = value;
    this.nextNode = nextNode;
    this.prevNode = prevNode;
  }
}
class Stack {
  constructor() {
    this.node = new Node();
    this._size = 0;
  }
  push(item) {
    this.node.value = item;
    this.node.nextNode = new Node(undefined, undefined, this.node);
    this.node = this.node.nextNode;
    this._size++;
  }
  pop() {
    this.node = this.node.prevNode;
    this._size--;
    return this.node.value;
  }
  size() {
    return this._size;
  }
}
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.size());
