//Package matauang

// mengubah format string atau integer angka menjadi format mata uang
// convert string or integer into a string of currency

const formatCurrency = (jumlah, locale, currency) => {
    const angka = parseFloat(jumlah)
    if (isNaN(angka)) {
        return 'Invalid Number'
    }
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
    }).format(angka)
}

const idr = (jumlah) => formatCurrency(jumlah, 'id-ID', 'IDR')
const usd = (jumlah) => formatCurrency(jumlah, 'en-US', 'USD')
const gbp = (jumlah) => formatCurrency(jumlah, 'en-GB', 'GBP')
const eur = (jumlah) => formatCurrency(jumlah, 'de-DE', 'EUR')
const cny = (jumlah) => formatCurrency(jumlah, 'zh-CN', 'CNY')
const jpy = (jumlah) => formatCurrency(jumlah, 'ja-JP', 'JPY')
const sar = (jumlah) => formatCurrency(jumlah, 'ar-SA', 'SAR')
const rub = (jumlah) => formatCurrency(jumlah, 'ru-RU', 'RUB')
const chf = (jumlah) => formatCurrency(jumlah, 'de-CH', 'CHF')
const dkk = (jumlah) => formatCurrency(jumlah, 'da-DK', 'DKK')
const sek = (jumlah) => formatCurrency(jumlah, 'sv-SE', 'SEK')

// Export semua fungsi
module.exports = {
    idr,
    usd,
    gbp,
    eur,
    cny,
    jpy,
    sar,
    rub,
    chf,
    dkk,
    sek,
}

// Test hasil
console.log(idr('10000')) // Rp10.000
console.log(usd('10000')) // $10,000
console.log(gbp(10000))   // £10,000
console.log(eur('10000')) // 10.000 €
console.log(cny('10000')) // ￥10,000
console.log(jpy('10000')) // ￥10,000
console.log(sar(10000))   // 10,000 ر.س
console.log(sek(10000))   // 10.000 kr
console.log(rub(10000))   // 10 000 ₽
console.log(dkk(10000))   // 10.000 kr

console.log(cny('invalid input')) // Invalid Number
console.log(usd('abcdefg'))        // Invalid Number
