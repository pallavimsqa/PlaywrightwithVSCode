// You have an array of all supported browsers and another array of temporarily blocked browsers. 
// Write a function that returns the runnable browsers, the blocked browsers, and a printable execution plan string such as `"Run on: chromium, webkit | Skip: firefox"`.

// Input:
//allBrowsers = ["chromium", "firefox", "webkit"], blockedBrowsers = ["firefox"]

// Output:
//{ runnable: ["chromium", "webkit"], blocked: ["firefox"], plan: "Run on: chromium, webkit | Skip: firefox" }

 //Explanation:The function filters out blocked browsers and formats both lists into a readable plan.


 let allBrowsers = ["chromium", "firefox", "webkit"];
 let blockedBrowsers = ["firefox"];

 function browsersExecutionPlan(allBrowsers , blockedBrowsers){

    const runnableBrowsers = allBrowsers.filter(browser => !blockedBrowsers.includes(browser));
    return runnableBrowsers;


 }


browsersExecutionPlan();





 