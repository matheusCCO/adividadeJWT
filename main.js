var crypto = require('crypto');
const header = JSON.stringify({
    'alg': 'HS256',
    'typ': 'JWT'
});

const playload = JSON.stringify({
    "email":"user@hotmail.com",
    "senha":"olaJWT"
});

const baseHeader = Buffer.from(header).toString('base64');
const basePlayload = Buffer.from(playload).toString('base64');

var signature = crypto.createHmac('sha256','secret').update(baseHeader + "." + basePlayload).digest('base64');
signature = Buffer.from(signature).toString('base64');

var token = baseHeader + basePlayload + signature

console.log(token)