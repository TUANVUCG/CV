function kiemTraSoChiaHetCho3(e) {
    var a = document.getElementById("số").value;
    if (e.keyCode == 13){
        if ( a % 3 == 0){
            alert("Chia hết cho 3");
        }
        else {
            alert("Không chia hết cho 3")
        }

    }

}