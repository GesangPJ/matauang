# MATAUANG

Node Package to format integer or string of number to a String of Currency (NOT CURRENCY CONVERSION!)

Node Pakcage untuk mengubah format integer atau string angka ke mata uang (BUKAN KONVERSI MATA UANG!)

## CURRENCY LIST / DAFTAR MATA UANG

1. Indonesia Rupiah (IDR) : `idr(xxx)`
2. United States Dollar (USD) : `usd(xxx)`
3. European Euro (EUR) : `eur(xxx)`
4. British Pound : `gbp(xxx)`
5. Japanese Yen : `jpy(xxx)`
6. Chinese Yuan : `cny(xxx)`
7. Saudi Riyal : `sar(xxx)`
8. Russian Rubel : `rub(xxx)`
9. Danish Krone : `dkk(xxx)`
10. Swedish Krona : `sek(xxx)`
11. Swiss (Switzerland) Franc : `chf(xxx)`

Example : `const money = usd(25000)`

Result : `$25,000`

## Install

`npm install matauang`

## Usage

```javascript

import { idr, usd, gbp, eur, cny, jpy, sar, rub, chf, dkk, sek } from 'matauang' // You can import all currencies available or one of them you need

const money = 25000
const moneys = '20,770'

result1 = usd(money)
result2 = usd(moneys)

console.log(result1,result2)

```

## Changelog

### v1.0.3

- Fix Type Error
- Simplified function
