const crypto = require('crypto')

const CHAVE = "giovanni-e-lindo"

function assinar(menssagem, chave){
    return crypto.createHmac("sha256", chave).update(menssagem).digest("hex")
}


console.log("=== 1) A MESMA mensagem, chaves diferentes ===\n");
const msg = "transferir 100 reais para ana";
console.log("mensagem:", msg);
console.log("com a chave certa: ", assinar(msg, CHAVE));
console.log("com chave errada:  ", assinar(msg, "outra-chave"));
console.log("-> So quem tem a chave gera a assinatura correta.\n");


