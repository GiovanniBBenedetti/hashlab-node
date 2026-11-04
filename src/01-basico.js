const crypto = require("crypto");

function hash(algoritmo, texto) {
  return crypto.createHash(algoritmo).update(texto).digest("hex");
}

const curto = 'a'
const longo = 'Ola, esse é um texto teste para realizar a comparação de um texto curto para um longo'

console.log("curto:", hash("sha256", curto))
console.log("longo:", hash("sha256", longo))