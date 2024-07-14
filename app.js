let captchaTxt = document.querySelector(".captcha-text");
let refreshBtn = document.querySelector(".refresh-btn");

let captcha = "";

let generateCaptcha = () => {
  let randomString = Math.random().toString(36).substring(2, 7);
  let randomStringArray = randomString.split("");
  let changeString = randomStringArray.map(char =>
    Math.random() > 0 ? char.toUpperCase() : char
  );
  captcha = changeString.join("   ")
  captchaTxt.value = captcha;
};

refreshBtn.addEventListener("click",generateCaptcha)
generateCaptcha();
