export default class Calculator {
  constructor(a, b){
    this.first = a;
    this.second = b;
  }

  add() {
    return this.first + this.second
  }

  subtract(){
    return this.second - this.first
  }

  divide(){
    return this.second/this.first
  }

  multiply() {
    return this.first*this.second
  }
}