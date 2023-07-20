function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

class orang {
    constructor() {
        console.log('telah dibuat');
    }
}

const mahasiswa = {
    nama: 'doddy',
    umur: 20,
    cetakMhs() {
        return `halo, nama saya ${this.nama}, saya berumur ${this.umur} tahun`;
    },
};


// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.orang = orang;

module.exports = {
    cetakNama,
    PI,
    mahasiswa,
    orang,
}