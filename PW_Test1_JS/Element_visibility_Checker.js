//Element Visibility Checker
//In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. 
// Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and 
// prints the appropriate action a QA engineer should take. 
// Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level. 
// States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed),
//  NOT FOUND (not present). Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).

let isPresent= true, isDisplayed = true, isEnabled = true, state ;
        

// Element visibilty checks

if (isPresent === true && isDisplayed === true && isEnabled === true)
    {
        state = "READY";
        console.log("Element is visibile, state-", state);
    }
    else if (isPresent === true && isDisplayed === true && isEnabled === false)
    {
        state = "DISABLED";
        console.log("Element is present and displayed but not enabled, state-", state);
    }
    else if(isPresent === true && isDisplayed === false )
        {
            state = "HIDDEN";
             console.log("Element is present but not displayed, state-", state);
        }
    else if (isPresent === false)
        {
            state = "NOT FOUND";
            console.log("Element not found, state-", state);
            // severity checks
            isPresent === false ? console.log("Severity is Critical") 
            :(isDisplayed === false || isEnabled === false)? console.log("Warning: Element not displayed or not enabled")
            :console.log("Ok - All good");
        }
       else
        {
             state = "UNKNOWN";
            console.log("Element is UNKNOWN, state-", state);
        }

severity();

// severity checks
           function severity(){

            isPresent === false ? console.log("Severity is Critical") 
            :(isDisplayed === false || isEnabled === false)? console.log("Warning: Element not displayed or not enabled")
            :console.log("Ok - All good");
           }
 


