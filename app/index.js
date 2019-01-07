const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const RSAPath = path.resolve('./app/example_id_rsa.pub');
const RSAPrivtaePath = path.resolve('./app/example_id_rsa');
const publicKey = fs.readFileSync(RSAPath, 'utf8');
const privateKey = fs.readFileSync(RSAPrivtaePath, 'utf8');


function encrypt(text) {
    const buffer = Buffer.from(text);
    const encrypted = crypto.publicEncrypt(publicKey, buffer);
    return encrypted.toString('base64');
};

function decrypt(encryptedText) {
    const buffer = Buffer.from(encryptedText, 'base64');
    const decrypted = crypto.privateDecrypt(privateKey, buffer);
    return decrypted.toString('utf8');
};


const encryptedText = encrypt('I am super secret');
const decryptedText = decrypt(encryptedText);

console.log(encryptedText);
console.log(decryptedText);
