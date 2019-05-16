const Cryptr = require('cryptr');
const cryptr = new Cryptr('EasilyDone');

const encryptedString = cryptr.encrypt('7383957073');
const decryptedString = cryptr.decrypt(encryptedString);

console.log(encryptedString); // 5590fd6409be2494de0226f5d7
console.log(decryptedString); // bacon
