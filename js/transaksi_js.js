function inputData(){
    var id_aktif = document.getElementById("form");
    var text_centerAktif = document.getElementById("id_aktif");
    var txt = "";
    for (i = 0; i < aktif.length; i++) {
        if (id_aktif[i].checked) {
        txt =id_aktif[i].value;
        }
    }
    text_centerAktif.innerHTML = txt;

}