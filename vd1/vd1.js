

// bài 1 
var x =5;
switch(x){ case 2: {console.log("Thứ 2"); break;}   
 case 3: {console.log("Thứ 3"); break;}     
    case 4: {console.log("Thứ 4"); break;}  
     case 5: {console.log("Thứ 5"); break;}  
       case 6: {console.log("Thứ 6"); break;}  
         case 7: {console.log("Thứ 7"); break;
        } default:{console.log("Khong phai cac thu ngay"); break;}}



        var thungngay = ["thu hai", "thu ba", "thu tu", "thu nam", "thu sau", "thu bay", "chu nhat"];
// bai 2

        var a=5;
         switch(a){ 
          case 2: {console.log(thungngay[0]); break;}   
        case 3: {console.log(thungngay[1]); break;}     
           case 4: {console.log(thungngay[2]); break;}  
            case 5: {console.log(thungngay[3]); break;}  
              case 6: {console.log(thungngay[4]); break;}  
                case 7: {console.log(thungngay[5]); break;}
               default:{console.log("Khong phai cac thu ngay"); break;}

         }

// bài 3: Kiểm tra số nguyên tố
var n = 15;
var x;
for ( let x = 2; x < n; x++) {
  if (n % 2 == 0 ) {
    if (n % x == 0) {
      console.log("không phải số nguyên tố"); 
      break;

    }
    
  } else {
    console.log("Đó là số nguyên tố");
    break;
  }
  
}

//câu 4: ma trận 3x3
var arr = [["1","1","0"],["1","0","1"],["0","1","1"]];
var matrixString = "";

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        matrixString += arr[i][j] + " ";
    }
    matrixString += "\n";
}

console.log(matrixString);
// câu 5: email không dùng funtion
const email = "kiet123@gmail.com";
const expression = /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/i;

if (expression.test(String(email).toLowerCase())) {
  console.log("email hop le");
} else {
  console.log("email khong hop le");
}


//câu 6: email
const validate = email => {
  const expression = /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/i
  return expression.test(String(email).toLowerCase())
}

if (validate("kiet123@gmail.com") == true) {
  console.log("email hop le");
  
}else{
  console.log("email khong hop le");

}
//câu 7: giao diện user, password bắt lỗi 

document.getElementById("create_tk").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var emailValue = document.getElementById("email").value;
  var passwordValue = document.getElementById("password").value;


  const validate = email => {
    const expression = /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/i
    return expression.test(String(email).toLowerCase())
  }
  
  if (validate("emailValue") == false) {
    emailValue = null;
    document.write("Nhập email chưa đúng định dạng");

    if (passwordValue.length < 8 ) {
      document.write("Nhập mật khẩu nhiều hơn 7 ký tự");
      passwordValue = null;
    }else{
      document.write("Tạo tài khoản thành công")
      var users = {
        email: emailValue,
        password: passwordValue
      }
    }
  }



});







//câu 8: in ra giao diện đăng nhập thành công 