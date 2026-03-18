// if (ourStatusCode >= 200 && ourStatusCode < 300)

// Nornal function
function validateStatusCode(status) {

    if (status >=200 && status < 300){
        console.log("Request is fine");
    }
     else
        console.log("Bad Request");

}

validateStatusCode(201);
validateStatusCode(301);
console.log("----------------------------------");

// Function Expression
const validateStatusCode_Exp = function (status) {

    if (status >=200 && status < 300){
        console.log("Request is fine");
    }
      else
        console.log("Bad Request");
}
validateStatusCode_Exp(201);
validateStatusCode_Exp(301);
console.log("----------------------------------");

// Arrow Function
const validateStatusCode_Arrow =  (status) => {

    if (status >=200 && status < 300){
        console.log("Request is fine");
    }
      else
        console.log("Bad Request");
}
validateStatusCode_Arrow(201);
validateStatusCode_Arrow(301);