let candidates = ["Ravi", "Anu", "Meena"];

// 1. Add at the end
candidates.push("Priya");
console.log("Push:", candidates);

// 2. Remove the last element
candidates.pop();
console.log("Pop:", candidates);

// 3. Remove the first element
candidates.shift();
console.log("Shift:", candidates);

// 4. Add at the beginning
candidates.unshift("Kiran");
console.log("Unshift:", candidates);

// 5. Check if a name exists
console.log("Includes:", candidates.includes("Anu"));

// 6. Find the position
console.log("Index:", candidates.indexOf("Meena"));

// 7. Convert array into a string
console.log("Join:", candidates.join(", "));

// 8. Reverse the array
candidates.reverse();
console.log("Reverse:", candidates);

// 9. Sort the array
candidates.sort();
console.log("Sort:", candidates);