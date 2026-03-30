// objects using let 
let config1= {browser : "Chrome" , timeout : 3000};
// Modifying properties are allowed
config1.browser = "Firefox";
config1.browser = 5000;
config1.retries = 2;
console.log(config1);

// reassigning of object is allowed

config1= {browser : "Safari"};
console.log(config1);

// object using const
const config = {browser : "Chrome" , timeout : 3000};
// Modifying properties are allowed
config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;
console.log(config);

// reassigning of object is not allowed
config= {browser : "Safari"};
console.log(config);