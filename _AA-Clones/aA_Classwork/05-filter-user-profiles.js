/***********************************************************************
Write a function named `filterUserProfiles` that accepts an array of
objects that represent user profiles and a callback function. You
can expect the callback function to take in an object and return
true or false.

`filterUserProfiles` should use the callback function to return an
array of names from the user profiles that, when passed into the
callback function, return true. You can expect all user profiles to
be passed in with a key of "name".

const facebookUsers = [
  { name: "John", age: "21", state: "Florida" },
  { name: "Mary", age: "57", state: "California" },
  { name: "Judy", age: "47", state: "Texas" },
  { name: "Mike", age: "32", state: "New York" }
];

filterUserProfiles(facebookUsers, (user) => user.age > 30); // ["Mary", "Judy", "Mike"]
filterUserProfiles(facebookUsers, (user) => user.state === "New York"); // ["Mike"]
***********************************************************************/

const filterUserProfiles = (users, userFilterFunction) => {
  const names = [];
  for (const user of users) {
    if (userFilterFunction(user)) {
      names.push(user.name);
    }
  }
  return names;
}

// const filterUserProfiles = (users, userFilterFunction) => {
//   const names = [];
//   for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (userFilterFunction(user)) {
//       names.push(user.name);
//     }
//   }
//   return names;
// };


// const filterUserProfiles = (users, userFilterFunction) => {
//   const filteredUsers = users.filter(user => {
//     return userFilterFunction(user);
//   });
//   const names = filteredUsers.map(user => user.name);
//   return names;
// };

const facebookUsers = [
  { name: "John", age: "21", state: "Florida" },
  { name: "Mary", age: "57", state: "California" },
  { name: "Judy", age: "47", state: "Texas" },
  { name: "Mike", age: "32", state: "New York" }
];

console.log(filterUserProfiles(facebookUsers, (user) => user.age > 30)); // ["Mary", "Judy", "Mike"]
console.log(filterUserProfiles(facebookUsers, (user) => user.state === "New York")); // ["Mike"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = filterUserProfiles;
} catch (e) {
  module.exports = null;
}
