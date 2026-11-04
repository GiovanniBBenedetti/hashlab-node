const crypto = require("crypto")

function hashSimples(senha){
    return crypto.createHash("sha256").update(senha).digest("hex")
}


console.log("=== Sem salt, todos com senha 123456 ===");
for (const usuario of ["paulo", "carla", "diego"]){
    console.log(` ${usuario}: ${hashSimples("123456")} `)
}

function hashComSalt(senha){
    const salt = crypto.randomBytes(8).toString('hex')
    const hash = crypto.createHash("sha256").update(salt+ senha).digest('hex')
    return{ salt, hash }
}

console.log("=== Com salt, todos com senha 123456 ===");
for (const usuario of ["paulo", "carla", "diego"]) {
  const resultado = hashComSalt("123456");
  console.log(`  ${usuario}: salt=${resultado.salt}  hash=${resultado.hash.slice(0, 32)}...`);
}