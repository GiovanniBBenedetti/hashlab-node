# HashLab

Laboratório prático para entender **como funcionam os hashes na prática**,
feito em Node.js como parte dos meus estudos de cibersegurança.

Cada módulo é um experimento curto e comentado que roda no terminal e mostra,
na tela, uma propriedade dos hashes acontecendo de verdade.

## Módulos

| Arquivo | O que demonstra |
|---------|-----------------|
| `src/01-basico.js` | Tamanho fixo, determinismo e os diferentes algoritmos (MD5, SHA-1, SHA-256, SHA-512) |
| `src/02-avalanche.js` | Efeito avalanche: mudar 1 caractere altera ~metade dos bits da saída |
| `src/03-senha.js` | Por que senhas iguais não podem virar hashes iguais, e como o *salt* resolve isso |

## Como rodar

Requer [Node.js](https://nodejs.org) instalado.

```bash
node src/01-basico.js
node src/02-avalanche.js
node src/03-senha.js
```

## Conceitos estudados

- Hash é unidirecional: não dá para "desfazer", só testar entradas e comparar
- Propriedades: determinismo, tamanho fixo, efeito avalanche, resistência a colisão
- Representação dos bytes em hexadecimal e em binário
- Salt: valor aleatório por usuário que impede *rainbow tables* e hashes repetidos

## Tecnologias

- Node.js (módulo nativo `crypto`)


---

Projeto de estudo. O módulo de ataque de dicionário, quando existir, roda
apenas contra hashes gerados localmente — material educacional.