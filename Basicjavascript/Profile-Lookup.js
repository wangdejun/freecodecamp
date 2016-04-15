//Setup
/**
We have an array of objects representing different people in our contacts lists.
A lookUp function that takes firstName and a property (prop) as arguments has been pre-written for you.
The function should check if firstName is an actual contact's firstName and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If firstName does not correspond to any contacts then return "No such contact"
If prop does not correspond to any valid properties then return "No such property"

"Kristian", "lastName" should return "Vos"
"Sherlock", "likes" should return ["Intriguing Cases", "Violin"]
"Harry","likes" should return an array
"Bob", "number" should return "No such contact"
"Akira", "address" should return "No such property"
**/


var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  var x="firstName";
  var y="lastName";
  var z="number";
  var w="likes";
  var p=String(prop);
  var flag=0;

  for(var i=0;i<contacts.length;i++){
      if(contacts[i][x]==firstName&&contacts[i].hasOwnProperty(p)){
          flag=1;
          return contacts[i][p];
      }
  }
  
  if(flag===0){
    for(var j=0;j<contacts.length;j++){
      if(contacts[j][x]==firstName){
             return "No such property";
         }else{
             return "No such contact";
         }
         }
  }
  
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
