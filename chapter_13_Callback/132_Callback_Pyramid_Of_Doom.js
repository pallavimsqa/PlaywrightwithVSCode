function step1(callback){
    console.log("Open Browser");
    callback();
}

function step2(callback){
    console.log("Navigate to page");
    callback();
}

function step3(callback){
    console.log("Click login button");
    callback();
}

function step4(callback){
    console.log("Enter credentials");
    callback();
}

step1(function(){
    step2(function(){
        step3(function(){
            step4(function(){
                console.log("Logged In");
            })
        })
    })
})