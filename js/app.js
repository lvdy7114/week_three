

//grant access to 18 and older. Deny 18 and under
let users = 18; 

if (users >= 18) {
    console.log("Access Granted")
}
else if (users < 18) {
    console.log("Access Denied")
}


//show grades 
let learner = 54;

if (learner >= 90) {
    console.log("A");
}
else if (learner >= 80) {
    console.log("B");
}
else if (learner >= 70) {
    console.log("C");
}
else if (learner >= 55) {
    console.log("D");
}
else {
    console.log("F");
}