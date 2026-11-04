const crypto = require("crypto")

function hashSimples(senha){
    return crypto.createHash("sha256").update(senha).digest("hex")
}


console.log("=== Sem salt, todos com senha 123456 ===");
for (const usuario of ["paulo", "carla", "diego"]){
    console.log(` ${usuario}: ${hashSimples("123456")} `)
}

