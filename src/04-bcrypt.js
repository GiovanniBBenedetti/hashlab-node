const bcrypt = require('bcrypt')

async function main() {
    const senha = "123456"

    console.log("=== gerando hash da mesma senha 2 vezes ===\n")
    const hash1 = await bcrypt.hash(senha, 12);
    const hash2 = await bcrypt.hash(senha, 12);
    console.log("hash 1:", hash1);
    console.log("hash 2:", hash2);
   //Mesma senha, hashes diferentes: o bcrypt sorteia um salt novo a cada vez


  console.log("=== verificando senhas ===\n");
  const certa = await bcrypt.compare("123456", hash1);
  const errada = await bcrypt.compare("senhaErrada", hash1);
  console.log("senha '123456'     confere?", certa);
  console.log("senha 'senhaErrada' confere?", errada);
}


main();