window.addEventListener('scroll', function () {
    let  menuArea = document.querySelector('header');
    
    if (window.pageYOffset > 0) {
        menuArea.classList.add("cus-nav");
    }
     else {
            menuArea.classList.remove("cus-nav");
    }
});



function validation() {
  var form = document.querySelector("#form");
  var email = document.querySelector("#email").value;
  var text = document.querySelector("#text");

  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("Valid");
    form.classList.remove("Invalid");
    text.innerHTML = "Your Email Address is Valid";
    text.style.color = "green";
  
  } else {
    form.classList.remove("Valid");
    form.classList.add("Invalid");
    text.innerHTML = "Please Enter a Valid Email Address";
    text.style.color = "red";
  }

  if (email == "") {
    form.classList.remove("Valid");
    form.classList.remove("Invalid");
    text.innerHTML = "";
    text.style.color = "";
  }
}
