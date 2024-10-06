export class Father{
  Name(){
    console.log("Rom");
  }

  SurName(){
    console.log("smith");
  }
}

export class Son extends Father{
  Name(){
    console.log("junior Rom");
  }
}