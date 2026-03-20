// Write a function makeRateLimiter(limit) that returns a function. 
// Each call to the returned function should track usage and return true if under limit
// , false when limit is exceeded.

// Note: Returns a function means its the closure

function makeRatelimiter(limit){

    let call=0;

    function trackUsage(){
        call ++;
        return call<=limit;
        
        // can be written as below
      /*  if(call<=limit)
        {
            return true;
        }
        return `false, Limit is exceeded`;*/
        
    }
    return trackUsage;

}

let limiter = makeRatelimiter(3);
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());