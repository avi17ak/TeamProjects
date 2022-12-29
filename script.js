var is_visible = false;

function see() {
  var input = document.getElementById("password");
  var see = document.getElementById("see");

  if(is_visible) {
    input.type = 'password';
    is_visible = false;
    see.style.color = 'gray';
  }else {
    input.type = 'text';
    is_visible = 'true';
    see.style.color = '#262626';
  }
}

function validate() {
  var input = document.getElementById("password").value;
  var valid = false
  input = input.trim();
  document.getElementById("password").value = input;
  
  if (input.length >= 8 && input.length <= 24) {
    document.getElementById("lengthCheck").style.color = "green";
  }else {
    document.getElementById("lengthCheck").style.color = "red";
  }

  if (input.match(/[0-9]/i)) {
    document.getElementById("numericCheck").style.color = "green";
  }else {
    document.getElementById("numericCheck").style.color = "red";
  }

  if (input.match(/[A-Z]/i)) {
    document.getElementById("upperCaseCheck").style.color = "green";
  }else {
    document.getElementById("upperCaseCheck").style.color = "red";
  }

  if (input.match(/[!@£$%^&*]/i)) {
    document.getElementById("specialCharCheck").style.color = "green";
  }else {
    document.getElementById("specialCharCheck").style.color = "red";
  }
  
}

function handleForm(e) {
  e.preventDefualt;
  var password = document.getElementById("password").value;
  var startDate = document.getElementById("startDate").value;
  var birthDate = document.getElementById("birthDate").value;
  var now = new Date();
  startDate = new Date(startDate);
  birthDate = new Date(birthDate);
  if (startDate > now) {
    alert("Contract Start Date must not be from the future");
    return false;
  } else if (now.getFullYear() - birthDate.getFullYear() < 18) {
    alert("You must be over 18");
    return false; 
  }else if (!(password.length >= 8 && password.length <= 24) || !(password.match(/[0-9]/i)) || 
  !(password.match(/[!@£$%^&*]/i)) || !(password.match(/[A-Z]/i))) {
    alert("Password missing critereon");
    return false;
  } else {
    alert ("Form successfully submitted");
    return true;
  }
    
  
}