// 1. We want a loop from 1 - 100. 
// 2. For every number that is divisible by only 3 and not 5, console log "Fizz"
// 3. For every number that is divisible by only 5 and not 3, console log "Buzz"
// 4. For every number divisible by 3 and 5, console log "Fizzbuzz"

for(var i=1;i<=100;i++){
    
//if i is divisible by 3 log "fizz"
    if(i%15==0)
    console.log('FizzBuzz:' + i)

    else if(i%3==0)
    console.log('Fizz:' + i)
    
    else if(i%5==0)
    console.log('Buzz:' + i)

    else(console.log(i))
}
