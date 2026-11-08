# HashLab

Laboratório prático para entender **como funcionam os hashes e os fundamentos
de criptografia na prática**, feito em Node.js como parte dos meus estudos de
cibersegurança.

Cada módulo é um experimento curto e comentado que roda no terminal e mostra,
na tela, um conceito de hash e segurança acontecendo de verdade.

## Módulos

| Arquivo | O que demonstra |
|---------|-----------------|
| `src/01-basico.js` | Tamanho fixo, determinismo e os diferentes algoritmos (MD5, SHA-1, SHA-256, SHA-512) |
| `src/02-avalanche.js` | Efeito avalanche: mudar 1 caractere altera ~metade dos bits da saída |
| `src/03-senha.js` | Por que senhas iguais não podem virar hashes iguais, e como o *salt* resolve isso |
| `src/04-bcrypt.js` | Hashing de senha com bcrypt: salt automático e o fator de custo |
| `src/05-hmac.js` | HMAC (hash + chave secreta): autenticidade e integridade, a base do JWT |
| `src/06-jwt.js` | JWT na prática: criar, decodificar e verificar um token com jsonwebtoken |
| `src/07-assimetrica.js` | Criptografia assimétrica (RSA): par de chaves pública/privada, assinar e verificar |

## Como rodar

Requer [Node.js](https://nodejs.org) instalado.

Os módulos 01, 02, 03, 05 e 07 usam só o módulo nativo `crypto` e rodam direto.
Os módulos 04 e 06 usam dependências externas, então antes instale:

```bash
npm install
```

Depois, rode qualquer módulo:

```bash
node src/01-basico.js
node src/05-hmac.js
node src/07-assimetrica.js
```

## Conceitos estudados

- Hash é unidirecional: não dá para "desfazer", só testar entradas e comparar
- Propriedades: determinismo, tamanho fixo, efeito avalanche, resistência a colisão
- Representação dos bytes em hexadecimal, binário e base64
- Salt: valor aleatório por usuário que impede *rainbow tables* e hashes repetidos
- bcrypt e o fator de custo: por que um hash de senha deve ser lento de propósito
- HMAC: hash combinado com uma chave secreta para provar autoria (assinatura do JWT)
- JWT: estrutura header.payload.assinatura e por que o payload é legível mas não falsificável
- Criptografia assimétrica: par de chaves que separa quem assina (privada) de quem verifica (pública)

## Tecnologias

- Node.js
- Módulo nativo `crypto` (SHA, HMAC, RSA)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

---

Projeto de estudo, material educacional.