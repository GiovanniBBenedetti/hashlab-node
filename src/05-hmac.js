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

console.log("=== 2) VERIFICANDO uma mensagem recebida ===\n");
// imagine que o remetente mandou a mensagem + a assinatura dele
const mensagemRecebida = "transferir 100 reais para ana";
const assinaturaRecebida = assinar(msg, CHAVE); // (o remetente gerou com a chave)

// o receptor recalcula a assinatura com a MESMA chave e compara
const assinaturaCalculada = assinar(mensagemRecebida, CHAVE);
const valida = assinaturaRecebida === assinaturaCalculada;

console.log("assinatura recebida: ", assinaturaRecebida);
console.log("assinatura calculada:", assinaturaCalculada);
console.log("mensagem autentica?", valida, "\n");


console.log("=== 3) ALGUEM ADULTEROU a mensagem no caminho ===\n");
// o atacante troca 100 por 9000, mas nao tem a chave para refazer a assinatura
const mensagemAdulterada = "transferir 9000 reais para ana";
const recalculada = assinar(mensagemAdulterada, CHAVE);

console.log("mensagem que chegou:", mensagemAdulterada);
console.log("assinatura original: ", assinaturaRecebida);
console.log("assinatura da adulterada:", recalculada);
console.log("batem?", assinaturaRecebida === recalculada, "-> REJEITADA, foi alterada!");
