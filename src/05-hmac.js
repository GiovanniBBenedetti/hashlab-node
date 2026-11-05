const crypto = require('crypto')

const CHAVE = "giovanni-e-lindo"

function assinar(menssagem, chave){
    return crypto.createHmac("sha256", chave).update(menssagem).digest("hex")
}


0