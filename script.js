$(document).ready(function() {
    
    $('#btnSubmit').click(function() {
        
        let nama = $('#inputNama').val().trim();
        let email = $('#inputEmail').val().trim();
        let wa = $('#inputWA').val().trim();
        let tanggal = $('#inputTanggal').val();
        let waktu = $('#inputWaktu').val();
        let orang = $('#inputOrang').val();
        
        let area = $('input[name="areaOptions"]:checked').val();

        if (nama === "" || email === "" || wa === "" || tanggal === "" || waktu === "") {
            alert("Mohon lengkapi semua data wajib (Nama, Email, WA, Tanggal, dan Waktu) sebelum melanjutkan reservasi.");
        } else {
            let pesanSukses = 
                "RESERVASI BERHASIL!\n\n" +
                "Terima kasih, " + nama + ".\n" +
                "Meja Anda untuk " + orang + " orang di area " + area + " telah dicatat.\n" +
                "Jadwal: " + tanggal + " pukul " + waktu + "\n\n" +
                "Staf kami akan segera menghubungi Anda melalui WhatsApp (" + wa + ") untuk konfirmasi menu pesanan.";
            
            alert(pesanSukses);

            $('#formReservasi')[0].reset();
        }
    });

});