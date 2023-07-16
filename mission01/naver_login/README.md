# 네이버 로그인 페이지 구현

---

## 목표

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

## 작성 코드

```js
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


function emailReg(text) {...}

function pwReg(text) {...}

loginEmail.addEventListener("input", function () {...});

loginPw.addEventListener("input", function () {...});

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

```

1. `"use strict";`
   안전한 코딩을 위해 상단에 작성

2. `document.querySelector`
   태그에 있는 id 속성과 클래스사용하여 해당 태그에 접근하여 하고 싶은 작업을 할 때 쓰는 함수

3. `login~~.addEventListener("input", function () {...});`
   아이디와 비밀번호 일치성 검사

4. `loginBtn.addEventListener("click", () => {});`
   버튼이 눌렸을때 일치하다면 페이지 이동
   그렇지 않다면 포커스 이동

---

## 실행화면

![image](https://github.com/dongapple/js-homework/assets/74224516/4bb9db89-90a5-4962-882f-6aac808abae9)
🔼 email 부적합, PW 부적합 시<br><br>

![image](https://github.com/dongapple/js-homework/assets/74224516/601b1910-0814-4b82-abce-99edbfce7e2a)
🔼 email 일치, PW 부적합 시<br><br>

![image](https://github.com/dongapple/js-homework/assets/74224516/1578cec2-be7d-4ad1-b7a5-fab2213df0e7)
🔼 email 불일치, PW 일치 시<br><br>

![image](https://github.com/dongapple/js-homework/assets/74224516/33cc4c5b-71db-4597-9b49-55f3979a9f5d)
🔼 email 일치, PW 일치 시
