// command dibawah berfungsi untuk menampilkan waktu saat ini
const waktu = document.getElementById("waktu");
function tanggal(){
    const date = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };
    waktu.innerHTML = date.toLocaleString('id-ID', options);
}

setInterval(tanggal, 1000);
tanggal();

// command dibawah menggunakan Library Swal(SweetAlret) yang berfungsi untuk menampilkan pesan sukses
function Submit() {
    Swal.fire({
        title: "Login Berhasil!",
        icon: "success"
    });
}
