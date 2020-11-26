class Person {
  say() {
    console.log(this.props);
  }
}

let p = new Person({name: 'hangfeng'})
console.log(p.say());
