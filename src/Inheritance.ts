export class Animal {
  Eat() {
    console.log('eat');
  }
  Sleep() {
    console.log('sleep');
  }
}

export class Dog extends Animal {
  Bark() {
    console.log('Bark');
  }
}

export class Cat extends Animal {
  Meow() {
    console.log('Meow');
  }
}
