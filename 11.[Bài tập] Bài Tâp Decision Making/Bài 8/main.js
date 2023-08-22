let getWeight = +prompt("Nhập số cân nặng");
let getHeight = +prompt("Nhập chiều cao");
bmi = getWeight / (getHeight ** 2);
console.log(bmi);
switch (true) {
    case bmi < 18, 5:
        console.log("Gầy");
        break;
    case bmi < 24, 9:
        console.log("Bình thường");
        break
    case bmi < 29,9:
        console.log("Tiền béo phì");
        break
    case bmi < 34,9:
        console.log("Béo phì độ I");
        break
    case bmi < 39,9:
        console.log("Béo phì độ II");
        break

    default:
        console.log("Béo phì độ III");
        break;
}