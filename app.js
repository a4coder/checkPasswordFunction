function checkPassword(showTextSelector, inputSelector) {

  "use strict";

  let showText = document.querySelector(showTextSelector);
  let inputField = document.querySelector(inputSelector);
  
  inputField.addEventListener("keyup", function () {
    function checkPwd(str) {
      if (str.length < 6) {
        showText.style.color = "red";
        return "رمز ورود کوتاه است";
      } else if (str.length > 50) {
        return "طول رمز ورود غیر مجاز";
      } else if (str.search(/\d/) == -1) {
        return "رمز ورود باید شامل عدد باشد";
      } else if (str.search(/[a-zA-Z]/) == -1) {
        return "رمز ورود باید با حروف کیبورد انگلیسی وارد شود";
      } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
        return "کارکتر غیر مجاز";
      }
      showText.style.color = "green";
      return "رمز ورود ایمن است";
    }

    showText.innerHTML = checkPwd(this.value);
  });
}
