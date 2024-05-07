function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

function cetakKalimat(kal) {
    return `ini kalimat yang saya buat ${kal}`;
}

const pi = 3.14;

const mahasiswa = {
    nama: "Desty",
    umur: 19,
    cetakMhs() {
        return `Hello guys, nama saya ${this.nama} dan saya ${this.umur} tahun`;
    },
};

class Orang {
    constructor() {
        console.log("Objek orang telah dibuat!!");
    }
}

module.exports = {
    cetakNama,
    cetakKalimat,
    pi,
    mahasiswa, 
    Orang
};