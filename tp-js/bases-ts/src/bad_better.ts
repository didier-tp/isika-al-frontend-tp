import { constants } from "buffer";

function withWarnings():void{
  let a : number = 6; 
  //Type number trivially inferred from a number literal, remove type annotation
  //'a' is never reassigned. Use 'const' instead
  console.log("a="+a);
  let u : string | undefined ;
  //u="abc"; 
  console.log("u="+u);

  let ageEventuel :number | null =null;
  console.log("ageEventuel="+ageEventuel);
}


function better():void{
    const a = 6; console.log("a="+a); 
  }

withWarnings();
better();
