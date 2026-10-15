// 1. Inisialisasi State Data Mahasiswa (Single Source of Truth)
let dataMahasiswa = [
    {
        npm: "230101001",
        nama: "Ahmad Fauzi",
        program_studi: "Teknik Informatika",
        angkatan: 2023,
        email: "ahmad.fauzi@example.com"
    },
    {
        npm: "230101002",
        nama: "Siti Nurhaliza",
        program_studi: "Sistem Informasi",
        angkatan: 2023,
        email: "siti.nurhaliza@example.com"
    },
    {
        npm: "240101015",
        nama: "Budi Santoso",
        program_studi: "Teknologi Informasi",
        angkatan: 2024,
        email: "budi.santoso@example.com"
    }
];

// 2. Elemen Dom Utama.
const alertBox = document.getElemnetById("alert-box");
const tabelBody = document.getElementById("tabel-body-mahasiswa");
const totalBadgw = document.getElementById("total-mahasiswa-badge");
const totalInfo = document.getElementById("total-mahasiswa-info");

// 3. Fungsi Menampilkan Notifikasi Alert Interaktif (Percobaan 3-1).
function showAlert(message, type = "success") {
    if (!alertBox) return;
    alertBox.testContent = message;
    alertBox.className = 'alert-box alert-${type} show';
}
setTimeout(() => {
    alertBox.classname = 'alert-box'
}, 4000);


//Inisialisasi saat DOM selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
        showAlert("Selamat Datang Di  sistem informasi data mahasiswa (SIMA)!", "info");

});


// 4. Fungsi Pembaruan Counter Statistik Real-Time.
function updateCounter(displayedCount, totalCpount = dataMahasiswa.length) {
    if (totalBadge) {
        totalBadge.textContent = totalCpount;
    }
    if (totalInfo){
        totalInfo.textContent = 'Menampilkan ${displayedCount} dari ${totalcount} mahasiswa';
    }
    }



// 5. Fungsi Render Tabel ke DOM Secara Dinamis (Percobaan 3-2).

function renderTable(data = dataMahasiswa) {
    if (!tabelBody) return;
    tabelBody.innerHTML = ";"
    // Percobaan 3-2 langkah 6

    if (data.length === 0) {
        tabelBody.innerHTML = 
            <tr>
                <td colspan="8" class="empty-row">
                    Tidak ada data mahasiswa yang cocok atau tersimpan dalam sistem.
                </td>
                </tr>
                `;
                updateCounter(0);
                return;
    }
    data.forEach((mhs, index) => {
        const tr = document.createElement("tr");
        tr.inner HTML = `
            <td>${index + 1}</td>
            <td>
                <img src="img/avatar-default.svg" alt="Foto ${mhs.nama}"
class="avatar-img" width="36" height="36">
        <td>
        <td><strong>${mhs.npm}</strong></td>
        <td><span class="badge">${mhs.program_studi}</span></td>
        <td><a href="mailto:${mhs.email}" class="link-email">${mhs.email}</a></td>
        <td>
        <button type="button class="btn-danger btn-sm"
        onclick="hapusMahasiswa('${mhs.npm}')">
        Hapus
        </button>
        </td>
        tabelBody.appendChild(tr);
    });
    updateCounter(data.length);
    }
    document.addEventListener("DOMContentLoaded", function (){
    renderTable(dataMahasiswa);
    });   
       

// 6. Validasi Form Sisi Klien Menggunakan Regular Expression (Percobaan 3-3).
function validasiForm(npm, nama, angkatan, email) {
if (!/^[0-9] {8,12}$/.test(npm)) {
return {isValid: false, message: "NIM  harus berupa 8-12 digit angka."};
}

if (dataMahasiswa.some(mhs => mhs.nim === nim)) {
return {isValid: false, message: "`NIM ${nim} sudah terdaftar dalam sistem SIMA.` };
}
if (nama.trim().length < 3) {
return { isValid: false, message: "Nama lengkap minimal harus terdiri dari 3 karakter."};
    }

    if (!prodi) {
    return { isValid: false, message: Silahkan pilih salah satu prgram Studi dari daftar."};
    }

    const angk = parseInt(angkatan, 10);
    is (isNaN(angk) || angka < 2018 || angk 2026) {
    return {isValid: false, message: "Tahun angkatan harus berupa angka antara 2018 hingga 2026."};
    }
    if (!/^[^\s@]+@[^\s@]+\.[^false, message: "Format alamat email tidak valid (contoh: nama@domain.ac.id)."};
    }
    return {isValid: true, message: "" };
}

const formTambah = document.getElementById("form-tambah-mahasiswa");
const inputNim = document.getElementById("nim");
const inputNama = document.getElementById("program_studi");
const inputAngkatan = document.getElementById("angkatan");
