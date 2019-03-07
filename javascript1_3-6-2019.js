if(age + 10 >= 30){
    return(`You'll be in your 30's in 10 years.`)
}else if (age + 10 >= 20){

}

const name = 'Josh'; 
switch(name){  // you are checking the name value against different cases/ the cases are the if else, and we are just looking for a particualr case. 
    case Josh : 
       console.log("Hello Josh"); // or return (if you use return you don't have to use the break)
       break; // syntax thing you just have to do so the code stops executing
    case Dan :
       console.log("Hello Dan");
       break; 
       default: 
       console.log("We don't know you");
       break; 
}   

const age = -1; 

const ageIsGreaterThanOne = (age) => {
    if(age > 0){
        return true;
    } else {
        return false; 
    }

}

const ageIsGreaterThanOne2 = (age) => {
    return age > 0 ? true : false; /// ternary statements are short hand if statements 
}

const ageIsGreaterThanOne3 = (age) => {
    return age > 0 ? age > 10 
    ? 'is older than 10' 
    : 'is younger than 10' 
    : 'is less than 0'
}
//You can next ternarys inside other ternarys 

myFavoriteFoods = [`pizza`, `toast`, `tamales`, `cheese`]; 


abby.myfavoriteFoods.push(`tacos`)