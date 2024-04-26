

setTimeout(function(){
    console.log("tick");
}, 1000); // this will run once




 let start = 0;
 let end = 10;

 let interval = setInterval(function(){
    console.log("Time: " + start)
    if(start === end){ 
        clearInterval(interval);
        console.log("Time stop" );
    }
    start++;
}, 1000); // this will run until 'start' equals 5.