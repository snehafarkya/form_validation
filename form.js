function validatefun(){
    var x = document.f1.yoname.value;
    var mail = document.f1.email.value;
     var pwd = document.f1.cpwd.value;
     var n = document.f1.num.value;
     var s = document.f1.sel.value;
     if(x == "" ){
         alert("Name can't be empty!");
         return false;
     }else if(mail==""){
       alert("Email is mandatory!");
         return false;
     }else if(pwd == ""){
         alert("Password is mandatory! ")
         return false;
     }else if(pwd.length<8){
        alert("Password should contain 8 characters ")
         return false;
     }if( n == "" ){
       alert("Number can't be empty!");
         return false;
     }
     if(s==""){
       alert("Please choose a language");
         return false;
     }else if(s.value=="Html"){
         return true;
     }else if(s.value=="Css"){
         return true;
     }else if(s.value=="Javascript"){
         return true;
     }
   else{
       alert("You've loged in successfully!!");
       return true;
     }
}

// function validatefun(){
//   var x = document.f1.yoname.value;
//  var mail = document.f1.email.value;
//        var pwd = document.f1.cpwd.value;
//     var n = document.f1.num.value; 
//     var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;

//     if(x != "" && mail !=  "" && n != "" ){
//       if (mail.match(emailReg)) {
//        if(pwd != "" || pwd.length>=8) {
//          if(n.length == 10){
//          alert("You've successfully loged in!")
//          return true;
//        }
//        else{
//       alert("Password must contain 8 characters!");
//       return false;
//        }
       
//        }
//        else{
//         alert("Invalid Email Address..!");
//         return false;
//        }
//     }
//     else {
//       alert("All fields are required.....!");
//       return false;
//       }

// }
// }