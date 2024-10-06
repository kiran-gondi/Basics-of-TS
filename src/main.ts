import './style.css';
import { setupCounter } from './counter.ts';
//import { Employee, PermanentEmployee } from './accessmodifiers.ts';
//import { Employee } from './Encapsulation.ts';
//import { Animal, Cat, Dog } from './Inheritance.ts';
//import { Father, Son } from './polymorphism.ts';
import { PermanentEmployee, ContractEmployee } from './Interface.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

//accessmodifiers.ts
/*var objEmp = new Employee();
objEmp.empId = 10;
//objEmp.empName  = "tes";
objEmp.empAge = 33;

console.log('empId:' + objEmp.empId);

var objEmp1 = new PermanentEmployee();
objEmp1.empAge = 11;
objEmp1.empId = 111;*/

//Encapsulation.ts
/*let objEmp = new Employee();
objEmp.setEmpId(20);
objEmp.getEmpId();
objEmp.setEmpId(-11);
objEmp.getEmpId();
console.log(objEmp.getEmpId());*/

//Inheritance.ts
/*let objDog = new Dog();
objDog.Sleep();
objDog.Eat();
objDog.Bark();

let objCat = new Cat();
objCat.Sleep();
objCat.Meow();*/

//Polymorphism.ts
/*let objSon = new Son();
objSon.Name();*/

//Interface.ts
let objPermanent = new PermanentEmployee();
objPermanent.Role();

let objContract = new ContractEmployee();
objContract.Role();

