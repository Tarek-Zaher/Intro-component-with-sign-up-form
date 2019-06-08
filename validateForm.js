function validateForm() {
  var fName = document.forms.claimForm.firstName.value;
  var lName = document.forms.claimForm.lastName.value;
  var email = document.forms.claimForm.email.value;
  var password = document.forms.claimForm.password.value;

  if (!fName || !lName || !email || !password) {
    if (!fName) {
      document.forms.claimForm.firstName.style.background = 'url("images/icon-error.svg") no-repeat scroll 95% 50%';
      document.forms.claimForm.firstName.style.border = '2px solid hsl(0, 100%, 74%)';
      document.getElementById("fNameEmptyError").innerHTML = "First Name cannot be empty";
    }
    if (!lName) {
      document.forms.claimForm.lastName.style.background = 'url("images/icon-error.svg") no-repeat scroll 95% 50%';
      document.forms.claimForm.lastName.style.border = '2px solid hsl(0, 100%, 74%)';
      document.getElementById("lNameEmptyError").innerHTML = "Last Name cannot be empty";
    }
    if (!email) {
      document.forms.claimForm.email.style.background = 'url("images/icon-error.svg") no-repeat scroll 95% 50%';
      document.forms.claimForm.email.style.border = '2px solid hsl(0, 100%, 74%)';
      document.getElementById("emailEmptyError").innerHTML = "Email cannot be empty";
    }
    if (!password) {
      document.forms.claimForm.password.style.background = 'url("images/icon-error.svg") no-repeat scroll 95% 50%';
      document.forms.claimForm.password.style.border = '2px solid hsl(0, 100%, 74%)';
      document.getElementById("passwordEmptyError").innerHTML = "Password cannot be empty";
    }
    return false;
  }
}
