function reverseString(str) {
    let reversed = str.split("").reverse().join("");
    return reversed;
}
let original = "JavaScript";

console.log("Original String:", original);
console.log("Reversed String:", reverseString(original));