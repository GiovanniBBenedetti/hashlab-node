const crypto = require('crypto')

function hashBytes(texto) {
  return crypto.createHash("sha256").update(texto).digest();
}

// conta quantos bits sao diferentes entre dois buffers
function bitsDiferentes(a, b) {
  let conta = 0;
  for (let i = 0; i < a.length; i++) {
    let xor = a[i] ^ b[i];   
    while (xor > 0) {
      conta += xor & 1;     
      xor >>= 1;             
    }
  }
  return conta;
}

const h1 = hashBytes("ola");
const h2 = hashBytes("olb");

console.log("ola:", h1);
console.log("olb:", h2);

const diff = bitsDiferentes(h1, h2);
console.log(`\n${diff} de 256 bits mudaram (${(diff / 256 * 100).toFixed(1)}%)`);