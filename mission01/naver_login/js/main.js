"use strict";

const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

const loginEmail = document.querySelector(".user-email-input");
const loginPw = document.querySelector(".user-password-input");
const loginBtn = document.querySelector(".btn-login");
const errorMassageEmail = document.querySelector("#userEmailError");
const errorMassagePw = document.querySelector("#userPasswordError");

let emailValue = loginEmail.value;
let pwValue = loginPw.value;
let emailPass = false;
let pwPass = false;

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

loginEmail.addEventListener("input", function () {
  emailValue = loginEmail.value;
  // console.log(emailValue);
  if (emailReg(emailValue)) {
    errorMassageEmail.classList.remove("is--invalid");
    if (emailValue === user.id) {
      emailPass = true;
      console.log("이메일 인증 완료");
    }
  } else {
    errorMassageEmail.classList.add("is--invalid");
    emailPass = false;
  }
});

loginPw.addEventListener("input", function () {
  pwValue = loginPw.value;
  // console.log(pwValue);
  if (pwReg(pwValue)) {
    errorMassagePw.classList.remove("is--invalid");
    if (pwValue === user.pw) {
      pwPass = true;
      console.log("비밀번호 인증 완료");
    }
  } else {
    errorMassagePw.classList.add("is--invalid");
    pwPass = false;
  }
});

loginBtn.addEventListener("click", () => {
  if (emailPass && pwPass) {
    // console.log("로그인 성공");
    window.location.href = "welcome.html";
  } else if (!emailPass && pwPass) {
    // console.log("이이디 문제");
    document.querySelector(".user-email-input").focus();
  } else if (emailPass && !pwPass) {
    // console.log("비밀번호 문제");
    document.querySelector(".user-password-input").focus();
  }
});
