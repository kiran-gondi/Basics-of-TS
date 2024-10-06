export class Employee {
  //The public modifier allows class varibale, properties and methods to be accessible from all locations.
  public empId: number;
  //The private modifier limits the visibility to the same-class only
  private empName: string;
  //The protected modifier allows properties and methods of a class to be accessible within same class and within subclasses/derived/child.
  protected empAge: number;
}

// var objEmp = new Employee();
// objEmp.empId = 10;
// //objEmp.empName  = "tes";
// objEmp.empAge = 33;

// console.log('empId:' + objEmp.empId);

export class PermanentEmployee extends Employee {
  empId = 100;
  //empName = "test1";
  empAge = 23;
}
