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
}

function setNameText(index) {
  nickName.textContent = data[index - 1].name;
}
