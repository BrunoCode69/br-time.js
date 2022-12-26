# Exemplo de uso abaixo:
# Data do calendario:
```js
const time = require("br-time.js");

let dia = time.days;
let ano = time.year;
let mes = time.month;

console.log(`Hoje é dia ${dia}/${mes}/${ano}`);
```

# Hora brasileira:

```js
const time = require("br-time.js");

let hora = time.hour;
let minutos = time.minute;
let segundos = time.second;

console.log(`Agóra é exatamente: ${hora} horas ${minutos} minutos e ${segundos} segundos.`);
```
