const jwt = require('jsonwebtoken')
const SEGREDO = 'meu-segredo-jwt'

const token = jwt.sign(
    { email: "teste@gmail.com", role:"user" },
    SEGREDO,
    {expiresIn: "1h"}
)

//Token Gerado
console.log(token)

//Decodificar informacoes do token'
console.log(jwt.decode(token))
