let math = +prompt("Nhập điểm môn toán");
physical = +prompt("Nhập điểm môn lý");
chemistry = +prompt("Nhập điểm môn hóa");
literature = +prompt("Nhập điểm môn văn");
history = +prompt("Nhập điểm môn sử");
geography = +prompt("Nhập điểm môn địa");
dtb = (physical + math + literature + chemistry + history + geography) / 6;
switch (true) {
    case dtb < 5:
        console.log("Xếp loại yếu");
        break;
    case dtb < 6,4:
        console.log("Xếp loại trung bình");
        break;
    case dtb < 7,9:
        console.log("Xếp loại khá");
        break;
    default:
        console.log("Xếp loại giỏi");
        break;
}
    
