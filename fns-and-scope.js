//////////////////PROBLEM 1////////////////////

var name = "Tyler";
function isTyler(name){
  if( name == "Tyler" ) {
    return true;
  }
  else {
    return false;
  }
}
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

//////////////////PROBLEM 2////////////////////

function getName() {
  var username = prompt ("Enter your name");
  return username;


}
//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here


//////////////////PROBLEM 3////////////////////


function welcome(username) {
var innerFunction = getName();
var greeting = ("Welcome" + "," + " ");
alert (greeting + innerFunction);
}


//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //they are the same


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //0, " ", undefined, null, false, NaN;
  // we check entering ===;



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName() {
    return "name";
  };



//Now save the function definition of myName into a new variable called newMyName

  var newMyName = function myName() {
  alert (newMyName);
  };

//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn() {
    return function anonymous(){
      return "name";
    }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = function anonymous(){
    return "username";
  }

//Now invoke innerFn.
