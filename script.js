let person = {
    name: "Susanne",
    age: 28,
    evaluations: [7, 10, 9]
};

/* Dot notation
person.name = "Susanne";
person.age = 28;
person.evaluations = 7, 10, 9;
*/

/* Bracket notation
person["name"] = "Susanne";
person["age"] = 28;
*/

console.log(person);

let selectedColors = ["groen", "blauw", "rood"];
console.log(selectedColors);
console.log(selectedColors.length);
console.log(selectedColors[0]);

selectedColors.push("geel");
console.log(selectedColors);

selectedColors.push(5);
console.log(selectedColors);

selectedColors.push("{greeting: Hi ik ben een object}");
console.log(selectedColors);
console.log(selectedColors[5]);




