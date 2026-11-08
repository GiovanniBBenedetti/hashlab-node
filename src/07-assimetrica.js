const crypto = require("crypto");

// gera o par de chaves
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});

const mensagem = "transferir 100 reais para ana";

// assina com a PRIVADA
const assinatura = crypto.sign("sha256", Buffer.from(mensagem), privateKey);
console.log("assinatura:", assinatura.toString("hex").slice(0, 40) + "...");

// verifica com a PUBLICA
const valida = crypto.verify("sha256", Buffer.from(mensagem), publicKey, assinatura);
console.log("assinatura valida?", valida);


// mesma assinatura, mensagem trocada -> falha
const trocada = crypto.verify("sha256", Buffer.from("transferir 9000 reais"), publicKey, assinatura);
console.log("vale para a mensagem trocada?", trocada);