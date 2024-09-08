class Person {
  constructor(name, age) {
    this.name = name; 
    this.age = age; 
  }

  compareAge(other) {
    // Write code here!
    if (this.age < other.age) {
      return `${other.name} is older than me.`;
    } else if (this.age > other.age) {
      return `${other.name} is younger than me.`;
    } else {
      return `${other.name} is the same age as me.`;
    }
  }
}
let p1 = new Person("Samuel", 24);
let p2 = new Person("Joel", 36);
let p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2)); //"Joel is older than me."
console.log(p2.compareAge(p1)); //"Samuel is younger than me."
console.log(p1.compareAge(p3)); //"Lily is the same age as me."
