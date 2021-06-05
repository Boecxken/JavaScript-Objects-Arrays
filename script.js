let person = {
    name: "Susanne",
    age: 28,
    evaluations: [7, 10, 9]
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);
console.log(person.evaluations);


let selectedColors = ["groen", "blauw", "rood"];
console.log(selectedColors);
console.log(selectedColors.length);
console.log(selectedColors[0]);
console.log(selectedColors[selectedColors - 1]);

selectedColors.push("geel");
console.log(selectedColors);

selectedColors.push(5);
console.log(selectedColors);

selectedColors.push({ greeting: "Hi ik ben een object" });
console.log(selectedColors);
console.log(selectedColors[5]);




