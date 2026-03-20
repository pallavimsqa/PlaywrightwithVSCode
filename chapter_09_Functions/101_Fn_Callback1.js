// 

function pw_class(topic , callback){

    console.log(`Playwright class satred`);

    let  a = topic;
    console.log("Todays topic is Functions");
    console.log("Playwright class was finished");

    callback();
}

function goTosleep(){
    console.log("After the playwright class go to bed");
}

pw_class('online' , goTosleep);