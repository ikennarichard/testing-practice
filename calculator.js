class Calculator {
  constructor(a, b){
    this.first = a;
    this.second = b;
  }

  divide(){
    return this.second / this.first
  }

  multiply() {
    return this.first * this.second
  }

  add() {
    return this.first + this.second
  }

  subtract(){
    return this.second - this.first
  }
}

module.exports = Calculator;