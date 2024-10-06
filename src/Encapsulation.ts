export class Employee {
  private _empId: number;
  empName: string;

  getEmpId() {
    return this._empId;
  }
  setEmpId(empId: number) {
    //this._empId = empId;
    if (empId < 0) {
      //console.log(empId + ":Id cannot be less than 0");
      console.log(`Id ${empId} cannot be less than 0`);
    } else {
      this._empId = empId;
    }
  }
}

// objEmp._empId = -10;
// console.log(objEmp._empId);
