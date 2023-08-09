const Account_Id  = 144553
let Account_Email = "prince@123gmail.com"
var Account_Password = "12345678"
Account_City = "Patna";

// Account_Id = 2
// Here changing the value of const "Account_Id" is not possible because 
// Account_Id is declared with Const (Means Constant);

Account_Email = "Hello@gmail.com"
Account_Password == "23434"
Account_City = "Jaipur"

/*
Prefer not to use Var
Because of issue in block scope and functional Scope;
*/

console.log(Account_Id);


console.table([Account_Email, Account_Id, Account_Password, Account_City]);
// Using the trick of up previous line we can see the input data in the form of table