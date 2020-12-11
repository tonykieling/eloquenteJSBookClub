// https://ca.indeed.com/viewjob?cmp=xMatters&t=Javascript+Developer&jk=036ee8eaa0cc6e50&sjdu=Zzi_VW2ygsY1fzh3Ma9ZsE4zIT1NTXCwgFBhdjeTC3N28nBkrZYHqSgkEUPYmvNwOkL1MJWGxfzzQwKszDG0Aw&tk=1eovq10ngubpo802&adid=360832672&ad=-6NYlbfkN0BlAX7oo7M2CeXUKHMy_HHlNpacNFX9cMGEy3TrwqhSWNQx4bsiQFBq026A-9ABlaeMfeeZrOoZQ5bTlyK2sslnPHDWKBP_6gRso60Vucdctqcrj0hMnQ1gD4LAI7KmqwqjPwNlYM2tFK-nxBMfhmaXXgdHA_mQBBMI6gcVZ3jn0yBGnjbfi8h0-q9-847qRZD3f_GcjRicydg2UXVdBTFeo3yqGi81dp0NI4sQz3NBaj6G88_UkY24q1bv9rL8rpd-3y6klQO5m5edh8pHksBJvdaRPyTdGUpaKriq7jSq63Do7M9oP8AAALQm0rYRjStMhjxUdnRWpo1j60_hoPLi&pub=e4ea14867e765046&utm_campaign=job_alerts&utm_medium=email&utm_source=jobseeker_emails
// https://www.xmatters.com/company/careers/javascript-developer/

// when I fineshed the answer and was about to send the application: "This job has expired"

var doThings = function(stuff) {
  let result = { arrayOfStuff: [] };
  // if (stuff.length) {
    for (var i = 0; i < stuff.length; i++) {
      const thing = stuff[i];
      result.arrayOfStuff.push(thing);
    }
    // console.log("result", result)
    // console.log("result.", result.arrayOfStuff)
    return result.arrayOfStuff;
    // } else return ("nothing to proceed");
    
  };

// console.log(doThings({a: 1}));
console.log(doThings([
  {a: "1"},
  "string",
  10
  ])
);
/*
This piece of code declares a function to a variable called doThings - it is a Function Expression. In order to run that function, for instance, one needs to invoke it by `doThings('parameters')`.
About the function: when the argument passed to it is an Array or a String, it will loop through all its items and add them individually to a new array called "arrayOfStuff", which is a property of an object called "result" - declared in the second line.
After all, it will return only the array part (arrayOfStuff) of that object (result).
Right now, in case of only calling the function whithout parameters will throw an error because the argument would not have the property "length". A possible way to solve it would be checking if "stuff" is valid (meets the condition) and handle this answer accordingly with the system requirements. Another way would be setting "stuff" a default value - it has to be an array or a string.
If the parameter is something other than an array or a string, the function will return an empty array.
Another thing to point in this code is that the loop works in a linear time complexity, which means that it will run the loop for every item (of an array or a string) and it will scale the time proportionally to the "stuff" length.
One more thing is that the for loop has a global variable "var i", which can be to accessed or even modified in any part of this program. The use of let and const brings ES6 features, which handles better the binder's states - lexical scope.
*/