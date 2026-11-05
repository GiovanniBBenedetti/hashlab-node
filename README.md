# HashLab

Laboratório prático para entender **como funcionam os hashes na prática**,
feito em Node.js como parte dos meus estudos de cibersegurança.

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

## Como rodar

Requer [Node.js](https://nodejs.org) instalado.

Os módulos 01, 02, 03 e 05 usam só o módulo nativo `crypto` e rodam direto.
O módulo 04 usa o bcrypt, então antes instale as dependências:

```bash
npm install
```

Depois, rode qualquer módulo:

```bash
node src/01-basico.js
node src/04-bcrypt.js
node src/05-hmac.js
```

## Conceitos estudados

- Hash é unidirecional: não dá para "desfazer", só testar entradas e comparar
- Propriedades: determinismo, tamanho fixo, efeito avalanche, resistência a colisão
- Representação dos bytes em hexadecimal e em binário
- Salt: valor aleatório por usuário que impede *rainbow tables* e hashes repetidos
- bcrypt e o fator de custo: por que um hash de senha deve ser lento de propósito
- HMAC: hash combinado com uma chave secreta para provar autoria (assinatura do JWT)

## Tecnologias

- Node.js
- Módulo nativo `crypto` (SHA, HMAC)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

---

Projeto de estudo, material educacional.