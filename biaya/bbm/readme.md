# bbm.json

**_MOHON BACA FILE README INI SEBELUM MENGGUNAKAN FILE bbm.json (TERUTAMA BAGIAN_** ```Besaran harga``` **_,_** ```Petunjuk penggunaan``` **_, DAN_** ```Disclaimer```**_)_**.

bbm.json adalah sebuah file json yang berisi harga-harga produk BBM yang beredar di Indonesia.

## Lisensi dan harga
Terlisensi dalam [Apache License 2.0](https://github.com/bennyes/bennyes.github.io/blob/main/LICENSE). Penggunaan file tidak dipungut biaya.

## Penggunaan

Penggunaan utama adalah dalam blog pribadi BENN/YES ([\*.bennyes.my.id](https://www.bennyes.my.id)), namun sebenarnya siapapun dapat menggunakan file ini.

## Tujuan

Tujuan dibuatnya bbm.json adalah sebagai tempat penyimpanan data harga produk BBM terutama bagi blog BENN/YES. Harga di dalam file json ini tidak dapat 100% dijadikan patokan untuk mengetahui harga sebenarnya, namun cukup berguna dalam konten tentang estimasi biaya perjalanan atau biaya bahan bakar yang digunakan.

## Besaran harga

Harga tercantum dalam Rupiah.

Harga BBM subsidi seperti Pertalite dan Solar jarang berubah. Harga BBM subsidi di file bbm.json benar-benar mengikuti ketentuan harga dari pemerintah.

Sedangkan untuk BBM non-subsidi, harganya cenderung berubah-ubah mengikuti harga minyak mentah. **_Harga BBM non-subsidi akan diupdate setidaknya 2 bulan sekali, serta dicantumkan sebesar Rp 500 sampai Rp 1000 lebih tinggi daripada harga aslinya_ untuk mengantisipasi perubahan harga yang cepat**.

## Petunjuk penggunaan

1. *Decode* file json ini menggunakan kode:

### Contoh dalam JavaScript
```javascript
function getjsonfile(a){ // a = link file bbm.json
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

Format pemanggilan secara umum adalah:

```javascript
let hargaprodukbbm = aaaaa.bbbbb.ccccc
```
#### KETERANGAN
- aaaaa: nama variabel data. Dalam contoh di atas diwakilkan oleh ```hargabbm```
- bbbbb: nama perusahaan yang memproduksi BBM. Contoh: ```pertamina```.
- ccccc: angka oktana (Research Octane Number/RON, C-8) untuk BBM bensin, atau angka setana (Cetane Number, C-16) untuk BBM diesel. Contoh: ```ron92``` atau ```cn51```.


Contoh, ingin menggunakan data harga BBM Pertalite

```javascript
let hargapertalite = hargabbm.pertamina.ron90;
```

## Daftar produk BBM yang tersedia
### 1. Pertamina
- Pertalite (RON 90): ```pertamina.ron90```
- Pertamax (RON 92): ```pertamina.ron92```
- Pertamax Turbo (RON 98): ```pertamina.ron98```
- Solar (CN 48): ```pertamina.cn48```
- Dexlite (CN 51): ```pertamina.cn51```
- Pertamina Dex (CN 53): ```pertamina.cn53```

### 2. Petunjuk penggunaan produk lainnya menyusul

## DISCLAIMER

- Pemilik *repository* dan file ini **_TIDAK BERTANGGUNG JAWAB ATAS DAMPAK PENGGUNAAN bbm.json DALAM SITUS, BLOG, ATAU APLIKASI ANDA, BAHKAN KEHIDUPAN ANDA_**.
- File ini **_TIDAK DAPAT DIJADIKAN SUMBER/RUJUKAN UTAMA_**. Silahkan menuju website resmi perusahaan masing-masing atau peraturan pemerintah untuk menjadikannya sumber utama.
