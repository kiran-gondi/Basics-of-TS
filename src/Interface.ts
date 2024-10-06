let age: Number;

//An interface acts like a contract in your application.
interface IEmployee {
  Role(): void;
}

export class PermanentEmployee implements IEmployee {
  Role() {
    console.log('Lead');
  }
}

export class ContractEmployee implements IEmployee {
  Role() {
    console.log('Deve');
  }
}
