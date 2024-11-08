document.getElementById("switchToSignUp").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signUpForm").style.display = "block";
  });
  
  document.getElementById("switchToLogin").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("signUpForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  });
  