# 엘리멘탈 포스터 페이지 구현

---

## 목표

각 캐릭터를 누르면 눌린 캐릭터가 선택되며 이름과 배경에 캐릭터에 맞게 바뀐다.

---

## 파일 구조

```
📦 mission02
 ┣ 📂 client
 ┃ ┣ 📂 css
 ┃ ┣ 📂 js
 ┃ ┃ ┣ 📜 audio,js
 ┃ ┃ ┣ 📜 data.js
 ┃ ┃ ┣ 📜 main.js
 ┃ ┃ ┗ 📜 setting.js
 ┃ ┗ 📂 lib
 ┣ 📜 index.html
 ┗ 📜 README.md
```

---

## 주요 코드

<br>

### 📜 main

```js
function handleSlider(e) {
  e.preventDefault();

  const target = e.target.closest("li");

  if (!target) return;

  const list = [...getNode("ul").children];
  const index = attr(target, "data-index");

  list.forEach((li) => removeClass(li, "is-active"));
  addClass(target, "is-active");

  setImage(index);
  setBgColor(index);
  setNameText(index);
}
```

- 이벤트 타겟을 li 태그인지 확인후 맞다면 타겟을 활성화, 이미지, 배경, 이름을 변경
  <br><br>

### 📜 setting

```js
function setBgColor(index) {
  css(
    "body",
    "background",
    `linear-gradient(to bottom,${data[index - 1].color})`
  );
}

function setImage(index) {
  attr(
    visualImage,
    "src",
    `./assets/${data[index - 1].name.toLowerCase()}.jpeg`
  );
  attr(visualImage, "alt", data[index - 1]);
}

function setNameText(index) {
  nickName.textContent = data[index - 1].name;
}
```

- 배경, 이미지, 이름에 인덱스 번호를 받아 데이터에서 타겟의 위치를 확인 후 변경

---

## [실행화면 (클릭)](https://github.com/dongapple/js-homework/assets/74224516/73f6a9b0-1d83-4d91-94a8-cde637b307b8)

![image](https://github.com/dongapple/js-homework/assets/74224516/9ab7c6b2-3661-4d0a-acf0-1498040f6fff)
