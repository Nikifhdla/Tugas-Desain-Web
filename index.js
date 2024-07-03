function validasi(){
    //document.getElementById('FormRegistrasi').onsubmit;
    const username= document.getElementById('username');

    alert(username.value);
}

fuction cekkesamaaan(){
    //ambil nilai dari input
    var Password = documen.getElementById('Passwors').value;
    var  RepeatPassword = documen.getElementById('Repeatpassword').validasi;
     // cek apakah data sama
      if(password  === Repeatpassword) {
        document.getElementById('hasil').innerHtml = "Password benar";
      }else {
        document.getElementById('hasil').innerHtml = "Password salah";

      }
      }
