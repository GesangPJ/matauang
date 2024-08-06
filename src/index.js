// IDR (Rupiah / Rp)
const idr = (jumlah) => {
    const angka = parseFloat(jumlah)
    if (isNaN(angka)) {
        return 'Invalid Number'
    }
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(angka)
}

// US Dollar (US Dollar / $)
const usd = (jumlah) => {
    const angka = parseFloat(jumlah)
    if (isNaN(angka)) {
        return 'Invalid Number'
    }
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    }).format(angka)
}

// Great Britain Pound (GBP)
const gbp = (jumlah) => {
    const angka = parseFloat(jumlah)
    if (isNaN(angka)) {
        return 'Invalid Number'
    }
    return new Intl.NumberFormat('en-UK', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 0,
    }).format(angka)
}

// Euro (EUR)
const eur = (jumlah) => {
    const angka = parseFloat(jumlah)
    if (isNaN(angka)) {
        return 'Invalid Number'
    }
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
    }).format(angka)
}

// Chinese Yuan (CNY)
const cny = (jumlah) => {
    const angka = parseFloat(jumlah)
    if (isNaN(angka)) {
        return 'Invalid Number'
    }
    return new Intl.NumberFormat('zh-CN', {
        style: 'currency',
        currency: 'CNY',
        minimumFractionDigits: 0,
    }).format(angka)
}

// Japanese Yen (JPY)
const jpy = (jumlah) => {
    const angka = parseFloat(jumlah)
    if (isNaN(angka)) {
        return 'Invalid Number'
    }
    return new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: 'JPY',
        minimumFractionDigits: 0,
    }).format(angka)
}

// Saudi Riyal (SAR)
const sar = (jumlah) => {
    const angka = parseFloat(jumlah)
    if (isNaN(angka)) {
        return 'Invalid Number'
    }
    return new Intl.NumberFormat('ar-SA', {
        style: 'currency',
        currency: 'SAR',
        minimumFractionDigits: 0,
    }).format(angka)
}

// Russia Rubel (RUB)
const rub = (jumlah) => {
    const angka = parseFloat(jumlah)
    if (isNaN(angka)) {
        return 'Invalid Number'
    }
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
    }).format(angka)
}

// Switzerland
const chf = (jumlah) => {
    const angka = parseFloat(jumlah)
    if (isNaN(angka)) {
        return 'Invalid Number'
    }
    return new Intl.NumberFormat('de-CH', {
        style: 'currency',
        currency: 'CHF',
        minimumFractionDigits: 0,
    }).format(angka)
}

// Denmark
const dkk = (jumlah) => {
    const angka = parseFloat(jumlah)
    if (isNaN(angka)) {
        return 'Invalid Number'
    }
    return new Intl.NumberFormat('da-DK', {
        style: 'currency',
        currency: 'DKK',
        minimumFractionDigits: 0,
    }).format(angka)
}

// Sweden
const sek = (jumlah) => {
    const angka = parseFloat(jumlah)
    if (isNaN(angka)) {
        return 'Invalid Number'
    }
    return new Intl.NumberFormat('sv-SE', {
        style: 'currency',
        currency: 'SEK',
        minimumFractionDigits: 0,
    }).format(angka)
}

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
console.log(sar(10000))
console.log(sek(10000))
console.log(rub(10000))
console.log(dkk(10000))


console.log(cny('invalid input')) // Invalid Number
console.log(usd('abcdefg')) // Invalid Number