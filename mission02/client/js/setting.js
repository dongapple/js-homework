function setBgColor(index) {
  css(
    "body",
    "background",
    `linear-gradient(to bottom,${data[index - 1].color[0]},#000)`
  );
}

function setImage(index, img) {
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
