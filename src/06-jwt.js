const jwt = require('jsonwebtoken')
const SEGREDO = 'meu-segredo-jwt'

const token = jwt.sign(
    { email: "teste@gmail.com", role:"user" },
    SEGREDO,
    {expiresIn: "1h"}
)

console.log(token)