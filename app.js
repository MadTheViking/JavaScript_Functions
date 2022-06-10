console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");



function print0dds(count){ 
    for(i=1;i<=count;i++){
        if (!(i % 3 )|| i == 1){
            console.log(i)
        }
    }

}
print0dds(100)







// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


//function checkAge(name,age) {
   // let UnderAge = `Sorry ${userName}, but you need to wait until you're ${16 - age}.`;
   // let Aboveage = `Congrats ${userName}, you can drive!`;
    //if(age < 16){
    //    console.log(UnderAge)
   // }else{
    //    console.log(Aboveage)
   // }
//}
//checkAge("Sally",17)
console.log("EXERCISE 3:\n==========\n")
    
function checkQuadrant(x,y) {
    if(x > 0 && y > 0){
        return 1;
    }else if (x < 0 && y >0){
        return 2;
    }else if (x < 0 && y <0){
        return 3;
    }else if (x > 0 && y <0){
        return 4;
    }
}