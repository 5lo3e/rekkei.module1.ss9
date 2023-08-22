let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
c = prompt("Nhập các phép tính(+,-,*,/)");
switch (c) {
    case "+":
        alert("a + b = " + (a + b));
        break;
    case "-":
        alert("a - b = " + (a - b));
        break;
    case "*":
        alert("a * b = " + (a * b));
        break;
    case "/":
        alert("a / b = " + (a / b));
        break;
    default:
        alert("mời nhập lại dấu");
        break;
}