// Callback inside callback is called Callback hell or pyramid of Doom

// Real QA Scenario: E2E Login Flow app.vwo.com

function openBrowser(callback){
    console.log("opening the browser");
    setTimeout(function (){
        console.log("Step 1: Browser starting");
        callback();
    }, 500);
}

function goToLoginPage(callback){
    setTimeout(function() {
       console.log("Step 2: Login page loaded"); 
       callback();   
    }, 500);
}

function enterLoginCredentials(callback){
    setTimeout(function() {
       console.log("Step 3: Login credentials entered");  
       callback();     
    }, 500);
}

function clickLogin(callback){
    setTimeout(() => {              // setTimeout(function(){
        console.log("Step 4: Login button clicked");
        callback();  
    }, 500);
}

openBrowser(function(){
    goToLoginPage(function(){
        enterLoginCredentials(function(){
            clickLogin(function(){
                console.log("Test completed");
            });
        });
    });
});