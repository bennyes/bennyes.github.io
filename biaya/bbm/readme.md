# bbm.json

bbm.json adalah sebuah file json yang berisi harga-harga produk BBM yang beredar di Indonesia.

## Lisensi dan harga
Terlisensi dalam [Lisensi Apache 2.0](https://github.com/bennyes/bennyes.github.io/blob/main/LICENSE). Penggunaan file tidak dipungut biaya.

## Pengguna

Pengguna utama adalah blog BENN/YES ([\*.bennyes.my.id](https://www.bennyes.my.id)), namun sebenarnya siapapun dapat menggunakan file ini.

## Petunjuk penggunaan

1. *Decode* file json ini menggunakan kode:

### Contoh dalam JavaScript
```javascript
function getjsonfile(a){ // a = link file json ini
  var jsonfile = new XMLHttpRequest();
  jsonfile.open("GET",a,false);
  jsonfile.send();
  return JSON.parse(jsonfile.responseText);
}
```

2. Kemudian panggil fungsi

```javascript
const hargabbm = getjsonfile("https://bennyes.github.io/biaya/bbm/bbm.json");
```

3. Kemudian sebutkan salah satu produk bbm yang diinginkan.

### Contoh dalam JavaScript
Contoh, ingin menggunakan data harga BBM Pertalite

```javascript
let hargapertalite = hargabbm.pertamina.ron90;
```

## Daftar produk BBM yang tersedia dan cara memanggil datanya
### 1. Pertamina
- Pertalite (RON 90):
```javascript
hargabbm.pertamina.ron90
```
- Pertamax (RON 92)
```javascript
hargabbm.pertamina.ron92
```
- Pertamax Turbo (RON 98)
```javascript
hargabbm.pertamina.ron98
```
- Solar (CN 48)
```javascript
hargabbm.pertamina.cn48
```
- Dexlite (CN 51)
```javascript
hargabbm.pertamina.cn51
```
- Pertamina Dex (CN 53)
```javascript
hargabbm.pertamina.cn53
```

### 2. Petunjuk penggunaan produk lainnya menyusul

## Update harga
Update harga dilakukan setiap bulan atau ketika ada penyesuaian harga BBM dari pemerintah.
