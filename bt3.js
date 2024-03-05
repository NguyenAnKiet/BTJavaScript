//28-2-2024
function checkSole(num) {
    if(num % 2 === 1) { 
        return true;
    }
    else  return true;
}
    return num %2===1


    const isOdd = (num) => {
        return num%2===1;
    }
    isOdd(5);

    var sachs = [    
        {       
            tacGia: 'Harper Lee',
            tieuDe: 'To Kill a Mockingbird',
            namXuatBan: 2020,
            trangThai: true
        },
        {
            tacGia: 'Ray Bradbury',
            tieuDe: 'Fahrenheit 451',
            namXuatBan: 2020,
            trangThai: false
        }
    ];
    
    for (let i = 0; i < sachs.length; i++) {
        console.log(sachs[i].tacGia + ", " + sachs[i].namXuatBan + ", " + sachs[i].tieuDe + ", " + sachs[i].trangThai);
    }
    
//cau1
var numbers = [2, 3, 4, 5];
var maxNumbers = Math.max.apply (Math, numbers);
var minNumbers = Math.min.apply (Math, numbers);
console.log (minNumbers);
console.log (maxNumbers);
//cau2
function timTuDaiNhatTrongCau() {
   
    var cau = ("Co Thuy dep gai");
    var cacTu = cau.split(" ");
    var tuDaiNhat = "";
    for (var i = 0; i < cacTu.length; i++) {
        var tu = cacTu[i].replace(/[^a-zA-Z]/g, '');
        if (tu.length > tuDaiNhat.length) {
            tuDaiNhat = tu;
        }
    }
    return tuDaiNhat;
}

var tuDaiNhat = timTuDaiNhatTrongCau();
console.log("Từ dài nhất trong câu là: " + tuDaiNhat);
//function parameters
function plus (x, y) {
    if (!x) throw ("x is underfinded");
    y = y || 0;
    return x + y;
}
try {
    console.log (plus() + "<br/>")
} catch (error) {
    console.log(error + "<br/>");
}
console.log (plus(1) + "<br/>");

//scopes, call
var person1 = {name: 'NhatMinh',age: 12};
var person2 = {name: 'HuuTrung',age: 32};
var sayHello = function(){ alert('hello,' +this.name);};
var sayGoobye =  function(){ alert('Goodbye,' +this.name);};

person1.sayHello = sayHello;
person1.sayGoodbye = sayGoodbye;

person2.sayHello = sayHello;
person2.sayGoodbye = sayGoodbye;

person1.sayHello(); 
person1.sayGoodbye(); 

person2.sayHello(); 
person2.sayGoodbye(); 

//cau3

function reverseString(str) {
   
    return str.split('').reverse().join('');
}
const inputString = ("a b c");

const reversedString = reverseString(inputString);
console.log("Chuỗi sau khi đảo ngược:", reversedString);

