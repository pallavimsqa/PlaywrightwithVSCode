// write a javascript program thet simulates a login sysytem with brute-force detection. 
// the system should lock the account after 3 consecutive failed attempts.
// Use a do.. while loop to process login attempts from an array.
// Demonstrate var(global counter), letb (loop variables) and const(credential and thershold). 
// validate using strict equality(===) and logical operators (&&).

// input: valid: admin@testingacademy.com/ Test@1234
// Attempts: [wrong,wrong,wrong, correct]

// Output: Attempt 1: Failed - strike 1/3
// Attempt 2: Failed - strike 2/3
// Attempt 3 : Failed - strike 3/3 Account locked
// Attempt 4 : Account Locked - Rejected