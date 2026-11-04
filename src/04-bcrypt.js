const bcrypt = require('bcrypt')

async function main() {
    const senha = "123456"

    console.log("=== gerando hash da mesma senha 2 vezes ===\n")
    const hash1 = await bcrypt.hash(senha, 12);
    const hash2 = await bcrypt.hash(senha, 12);
    console.log("hash 1:", hash1);
    console.log("hash 2:", hash2);
   //Mesma senha, hashes diferentes: o bcrypt sorteia um salt novo a cada vez

}


main();