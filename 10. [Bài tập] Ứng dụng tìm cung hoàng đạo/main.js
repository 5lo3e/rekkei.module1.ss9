let day = +prompt("Nhập ngày sinh");
let month = +prompt("Nhập ngày tháng");
switch (month) {
    case 1:
        if (day <= 19) {
            console.log("Ma kết");
        }
        else if (day <= 31) {
            console.log("Bảo Bình");
        }
        break;
    case 2:
        if (day <= 18) {
            console.log("Bảo Bình");
        }
        else if (day <= 29) {
            console.log("Song Ngư");
        }
        break;
    case 3:
        if (day <= 20) {
            console.log("Song Ngư");
        }
        else if (day <= 31) {
            console.log("Bạch Dương");
        }
        break;
    case 4:
        if (day <= 21) {
            console.log("Bạch Dương");
        }
        else if (day <= 30) {
            console.log("Kim Ngưu");
        }
        break;
    case 5:
        if (day <= 20) {
            console.log("Kim Ngưu");
        }
        else if (day <= 31) {
            console.log("Song tử");
        }
        break;
    case 6:
        if (day <= 21) {
            console.log("Song tử");
        }
        else if (day <= 30) {
            console.log("Cự Giải");
        }
        break;
    case 7:
        if (day <= 22) {
            console.log("Cự Giải");
        }
        else if (day <= 31) {
            console.log("Sư Tử");
        }
        break;
    case 8:
        if (day <= 22) {
            console.log("Sư Tử");
        }
        else if (day <= 31) {
            console.log("Xử nữ");
        }
        break;
    case 9:
        if (day <= 22) {
            console.log("Xử nữ");

        }
        else if (day <= 30) {
            console.log("Thiên Bình");
        }
        break;
    case 10:
        if (day <= 23) {
            console.log("Thiên Bình");
        }
        else if (day <= 31) {
            console.log("Hổ Cáp");
        }
    case 11:
        if (day <= 21) {
            console.log("Hổ Cáp");
        }
        else if (day <= 30) {
            console.log("Nhân mã");
        }
    case 12:
        if (day <= 21) {
            console.log("Nhân mã");
        }
        else if (day <= 31) {
            console.log("Ma kết");
        }

    default:
        console.log("vui lòng nhập lại ");
        break;
}