const { createHash} = require("crypto");

// creates a string hash
function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

// compare two hashed passwords
let password = "hi-mom!";
const hash1 = hash(password);
console.log(hash1);

password = 'hi-mom!';
const hash2 = hash(password);
const match = hash1 === hash2;
console.log(match ? ' \u2714 good password' : ' \u274C bad password');