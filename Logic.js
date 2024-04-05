let buku = [
    { "nama": "sherlock", "jumlah": 2 },
    { "nama": "lupin", "jumlah": 2 },
    { "nama": "aladin", "jumlah": 2 }
];

function periksaBuku() {
    const jumlahInput = document.getElementById('jumlah');
    const jumlah = parseInt(jumlahInput.value);
    const pilihanBuku = document.getElementById('buku').value;

    if (jumlah === '' || isNaN(jumlah)) {
        alert('Jumlah buku harus diisi!');
        return;
    }

    const bukuDipilih = buku.find(buku => buku.nama === pilihanBuku);

    if (!bukuDipilih) {
        alert('Buku tidak ditemukan!');
        return;
    }

    if (jumlah > bukuDipilih.jumlah) {
        alert('Stok buku tidak mencukupi!');
        return;
    }

    alert('Silahkan ambil buku anda!');
}
