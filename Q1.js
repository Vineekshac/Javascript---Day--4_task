let obj1 = {name: "person1", age: 5};
let obj2 = {age: 5, name: "person1"};

// Convert objects to JSON strings
let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);

// Sort the properties within the JSON strings
str1 = JSON.stringify(JSON.parse(str1, (key, value) => typeof value === 'object' && value !== null ? Object.keys(value).sort().reduce((o, k) => ({...o, [k]: value[k]}), {}) : value));
str2 = JSON.stringify(JSON.parse(str2, (key, value) => typeof value === 'object' && value !== null ? Object.keys(value).sort().reduce((o, k) => ({...o, [k]: value[k]}), {}) : value));

// Compare the sorted strings
if (str1 === str2) {
    console.log("The objects are equal.");
} else {
    console.log("The objects are not equal.");
}
