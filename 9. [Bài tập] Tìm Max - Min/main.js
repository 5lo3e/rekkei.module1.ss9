let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
let c = +prompt("Nhập c");
    max=0
    min=0 
    if(a>b){
        max=a;
        min=b;
    }
    else{
        max=b;
        min=a;
    }
    if(c>max){
        max=c
    }
    if(c<min){
        min=c
    }
console.log("Max là" ,max);
console.log("Min là" ,min);

    
    