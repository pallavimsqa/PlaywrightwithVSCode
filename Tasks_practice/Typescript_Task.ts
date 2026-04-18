// Define interfaces for user data 
interface User_Data{
    username : string;
    age : number;
}

//Create interfaces with optional properties
interface Optional_Properties{
    middleName : string;
    phone? :number;
    address? : string;
    emailID? : string;
}

//Extend interfaces for inheritance
interface  Optional_Properties extends User_Data {
    middleName : string;
    phone? :number;
    address? : string;
    emailID? : string;
}


//Implement interfaces in classes

class User implements