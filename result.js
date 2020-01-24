//1.Take a mathematical expression as input which contain only [/, *,+,-] as operators.
//2.Compute the operations according to the operator identified and print the result.

//Import the sum,diff,multiply and divison modules
const sum=require("./sum")
const diff=require("./subtract")
const mul=require("./multiply")
const div=require("./division")

//takeing input for command line arguments
const input=process.argv[2];

const reg = /(\d+\.\d+)|\d+/g;

//Array to store the digits
const myArray = input.match(reg);

const reg1 = /[+\-*\/]/g;

//Array to store the operands
const myArray2 = input.match(reg1);

console.log(myArray);
console.log(myArray2);


var finAns;
var x=0
var y=2

//Converting String to Number
var op1=Number(myArray[0])
var op2=Number(myArray[1])

for(let i=0;i<myArray.length-1 ;i++)
{
    
    if(myArray2[x] === '+')
    {
        op1=sum.sum(op1,op2) //calling sum function from sum module
           
    }
    else if(myArray2[x] === '-')
    {
        
       op1=diff.diff(op1,op2) //calling diff function from subtract module
            
    }
    else if(myArray2[x] === '*')
    {
       
        op1=mul.mul(op1,op2)    //calling mul function from multiply module
             
    }
    else if(myArray2[x] === '/')
    {
        op1=div.div(op1,op2)    //calling div function from division module
    }

    op2=Number(myArray[y++]);
    x++;
}

//Printing final output of given mathematical expression
console.log("Answer = " +op1); 


