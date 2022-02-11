var firstnamemsg = document.getElementById("firstnamemsg");
var middlenamemsg = document.getElementById("middlenamemsg");
var lastnamemsg = document.getElementById("lastnamemsg");
var gendermsg = document.getElementById("gendermsg");
var dobmsg = document.getElementById("dobmsg");
var basicmsg = document.getElementById("basicmsg");
var allowancesmsg = document.getElementById("allowancesmsg");
var deducctionmsg = document.getElementById("deducctionmsg");
var cancel = document.getElementById("cancelbtn");

cancel.addEventListener("click",function(e){
   e.preventDefault();
   document.getElementById("myform").reset();
},true);

window.addEventListener('load', (event) => {
   firstnamemsg.style.display = "none";
   middlenamemsg.style.display = "none";
   lastnamemsg.style.display = "none";
   gendermsg.style.display = "none";
   dobmsg.style.display = "none";
   basicmsg.style.display = "none";
   allowancesmsg.style.display = "none";
   deductionmsg.style.display = "none";

});
function validateform(){  

  var fname= document.myform.fname.value;
  var mname= document.myform.mname.value;
  var lname= document.myform.lname.value; 
  var dob = document.myform.dob.value; 
  var gender = document.myform.gender.value;
  var basic = document.myform.basic.value;
  var allowances = document.myform.allowances.value;
  var deduction = document.myform.deduction.value;
  var birth_date = new Date(dob);

  var birth_date_day = birth_date.getDate();
  var birth_date_month = birth_date.getMonth()
  var birth_date_year = birth_date.getFullYear();
  var calculated_age = 0;

  var today_date = new Date();
  var today_day = today_date.getDate();
  var today_month = today_date.getMonth();
  var today_year = today_date.getFullYear();


  if (today_month > birth_date_month) 
  {
  calculated_age = today_year - birth_date_year;
  }
  else if (today_month == birth_date_month)
  {
      if (today_day >= birth_date_day){
      calculated_age = today_year - birth_date_year;
      }
      else {
      calculated_age = today_year - birth_date_year - 1;
      }
  }
  else {
  calculated_age = today_year - birth_date_year - 1;
  }
  
  if (fname!=null || fname!=""){  
      firstnamemsg.style.display = "none";  
  }
  
  if (mname!=null || mname!=""){  
      middlenamemsg.style.display = "none";  
  } 

  if (lname!=null || lname!=""){  
      lastnamemsg.style.display = "none";  
  }

  if (dob==null || dob==""){  
      dobmsg.style.display = "none";
  }

  if (basic==null || basic==""){  
      basicmsg.style.display = "none";
  }

  if (allowances==null || allowances==""){  
      allowancesmsg.style.display = "none";
  }

  if (deduction==null || deduction==""){  
      deductionmsg.style.display = "none";
  }

  if (gender==null || gender==""){  
      gendermsg.style.display = "none";
  }

  if (fname==null || fname==""){   
      firstnamemsg.style.display = "block";
      firstnamemsg.style.color = "red";   
      return false;  
  }else if (mname==null || mname==""){  
      middlenamemsg.style.display = "block";
      middlenamemsg.style.color = "red";   
      return false;  
  }else if (lname==null || lname==""){  
      lastnamemsg.style.display = "block";
      lastnamemsg.style.color = "red";   
      return false;  
  }else if (gender==null || gender==""){  
      gendermsg.style.display = "block";
      gendermsg.style.color = "red";   
      return false;  
  }else if (dob==null || dob==""){  
      dobmsg.style.display = "block";
      dobmsg.style.color = "red";   
      return false;  
  }else if(calculated_age < 18){
      alert("Age is below 18");
      return false;
  }else if(basic==null || basic==""){
      basicmsg.style.display = "block";
      basicmsg.style.color = "red";   
      return false;
  }else if(allowances==null || allowances==""){
      allowancesmsg.style.display = "block";
      allowancesmsg.style.color = "red";   
      return false;
  }else if(deduction==null || deduction==""){
      deductionmsg.style.display = "block";
      deductionmsg.style.color = "red";   
      return false;
  } 
}  

function sum() {
      var basic = document.getElementById('basic').value;
      var allowances = document.getElementById('allowances').value;
      var deduction = document.getElementById('deduction').value;
      var result = parseInt(basic) + parseInt(allowances) - parseInt(deduction);
      if (!isNaN(result)) {
          document.getElementById('net_salary').value = result;
      }
  }
