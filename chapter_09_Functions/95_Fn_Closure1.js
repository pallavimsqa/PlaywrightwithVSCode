//
function makeCounter(start=0){
    let count = start;

   /* function increment(){
        count++;
    }

    function decrement(){
        count--;
    }
    function get(){
        return count;
    }*/
    // the above multiple functions can written as below with return keyword , when there is one line code
    
    return {
        increment() { count++;},
        decrement() { count--;},
        get(){ return count;}
    }
}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log("Incremented Count:", counter.get());
counter.decrement();
console.log("Decremented Count:",counter.get());