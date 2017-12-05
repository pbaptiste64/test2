// Build a function declaration called maxOf2 that takes in two numbers and
// returns the greater value.
function maxOf2(a,b){
    var poopThatLooksLikeHearts;
    if(a>b){
        return a;
    }else if(a<b){
        return b;
    }else{
        return "equal";
    }

}

console.log(maxOf2(5,0));
console.log(maxOf2(4,4));
console.log(maxOf2(-4,-3));


//
// IMPORTANT: Make sure your function returns "equal" if the two numbers are equal.
// You might want to use an if/elseif/else statement for this.
//
// Then make 3 console logs calling your maxOf2 function inside each one.
// The first console log should print 5.
// The second console log should print "equal".
// The third console log should print -3.
