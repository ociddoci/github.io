function Hitung() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);

    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear()
    }

    let date1 = today.getDate();
    let month1 = today.getMonth() + 1;
    let year1 = today.getFullYear();

    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (birthDetails.date > date1) {
        date1 = date1 + month[month1 - 2];
        month1 = month1 - 1;
    }

    if (birthDetails.month > month1) {
        month1 = month1 + 12;
        year1 = year1 - 1;
    }

    let y = year1 - birthDetails.year;
    let m = month1 - birthDetails.month;
    let d = date1 - birthDetails.date;

    document.getElementById("tahun").textContent = y;
    document.getElementById("bulan").textContent = m;
    document.getElementById("hari").textContent = d;
}