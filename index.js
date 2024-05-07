// const fs = require("fs"); //core module
// const cetaknama = require("./coba"); //local module
// const moment = require("./coba");
const coba = require("./coba");
// console.log(cetaknama("destylae"));
// console.log(coba);
console.log(
    coba.cetakNama("Desty"),
    coba.pi,
    coba.cetakKalimat("belajar nodejs"),
    coba.mahasiswa.cetakMhs(),
    new coba.Orang()
);