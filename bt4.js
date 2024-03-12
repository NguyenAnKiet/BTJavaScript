// 6/3
//closures
var sayBye = function(name) {
    var text = 'Bye ' + name;
    return() => {
        console.log (text);
    }
}

sayBye ('Me');
var callMe = sayBye('Me');
callMe();
// curries

function add(a, b, c){
    return a+b+c;
}
console.log(add(1, 2, 3));
function addCurries (a) {
    return(b) => {
        return (c) => {
            return a+ b+ c;
        }
    }
}
console.log(addCurries(1)(2)(3));
const ad1 = addCurries(1);
const ad2 = ad1(2);
const ad3 = ad2(4);

console.log(ad3);

// this
 var student = {
    name: 'Mai Ha Thi',
    getName: function() {
        console.log(this.name);
        return this.name;
    }
 };
 var _deStudent = student.getName();

 //global, apply


 var person1 = {name: 'Nhat Minh', age: 12};
 var person2 = {name: 'Huu Trung', age: 32};

var sayHello = function () { console.log('Hello, ' + this.name);};
var sayGoodbye = function () { console.log('Goodbye, ' + this.name);};

sayHello.call (person1);
sayGoodbye.call (person2);
sayHello.apply (person1);
sayGoodbye.apply (person2);

//scopes, chain

function step1() {
    var te;
    console.log(te);
  }
function step2() {
    te = 2;
    step1();
}
step2();
var te = "Global variable";

//scopes, bind

var checkNumbericRange = function (value) {
    if(typeof value!=='number')
        return false;
    else
        return value >=this.minimum&&value <= this.maximum;

  }
  var range = {minimum:10, maximum: 20};
  var boundCheckNumericRange = checkNumericRange.bind(range);
  var result = boundCheckNumericRange(12);
  document.write(result);

  // lexical scope
  function fOuter() {
    var x = "Hello";
    function fInner() {
        x = "World";
    }
    fInner();
    return x;
  }
  document.write(fOuter());
  //
  var myFunction = function() {
    var name = 'Ha Thi';
    var myOtherFunction = function (){
        console.log('I am ' + name);
    };
    console.log(name);
    myOtherFunction();
  };

  myFunction();

// chuuyển function slide 36 thành dạng class

class Rect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.calcArea = function () {
            return this.w * this.h;
        }
        return this;
    }
}

var rect1 = new Rect(1, 2, 3, 4);
console.log(rect1.constructor.name + " " + rect1.constructor.prototype + " " + rect1.calcArea() );

var rect2 = new Rect(1, 2, 3, 4);
console.log(rect2.constructor.name + " " + rect2.constructor.prototype + " " + rect2.calcArea() );


//functional inheritance


    class square {
        constructor (width) {
            this.width = width;
        }
        getArea() {
            console.log (`Square of this ${this.width * this.width}`);
            return this.width * this.width;
        }
    }
    class cube extends square {
        constructor(width) {
            super(width);
        }
        squareArea = this.getArea();
        getVolume () {
            console.log(`Volume of this ${this.squareArea * this.width}`);
            return this.getArea * this.width;
        }
    }
    var myCube = new cube(5);
    myCube.getVolume();


 //BT


 class Pet1{
    constructor(name, method){
        this.name = name;
        this.method = method;
    }
    in(){
        return "Tôi tên là: "+this.name+".,"+this.method;

    }


}
class Pet extends Pet1{
    constructor(name, method,method_pet){
        super(name, method);
        this.method_pet = method_pet;
        
    }

}





//Chuyển slide 50 thành class




class Car {
    constructor() {
      this.speed = 0;
    }
    
    printSpeed() {
      console.log(this.speed);
    }
    
    instanceMethod() {
      console.log("An instance method");
    }
  }
  
  class Carbriolet extends Car {
    constructor() {
      super();
      this.topState = 'closed';
    }
    
    openTop() {
      this.topState = 'opened';
      console.log(`Top: ${this.topState}`);
    }
    
    closeTop() {
      this.topState = 'closed';
      console.log(`Top: ${this.topState}`);
    }
  }
  
  class TeslaCabriolet extends Carbriolet {
    constructor() {
      super();
      this.name = 'Tesla http://www.teslamotors.com/roadser';
    }
    
    sayName() {
      console.log(this.name);
    }
  }
  
  const car = new Car();
  car.speed = 50;
  car.printSpeed();
  car.instanceMethod();
  
  const carbriolet = new Carbriolet();
  carbriolet.speed = 120;
  carbriolet.printSpeed();
  carbriolet.openTop();
  carbriolet.closeTop();
  
  const tesla = new TeslaCabriolet();
  tesla.openTop();
  tesla.sayName();
  



//sử dụng hàm ở trên, tìm số chẵn trong 1 mảng, có sử dụng callback trong mảng.

function test(something1){
    var n1 = something1
    console.log("test: "+n1);
}
function test2(sum1, sum2, callback){
    let sum = sum1 + sum2;
    callback(sum);
}
test2(5,5,test);



function tim_so_chan(arr = []) {
    for (let index = 0; index < arr.length; index++) {
         if (arr[index]%2 == 0) { 
             console.log("so chan: "+arr[index]);
}
    }
}
function nhap_mang(callback_mang) {
 let arr = [1,2,3,4,5,6,7,8,9];
 callback_mang(arr);
}
nhap_mang(tim_so_chan)