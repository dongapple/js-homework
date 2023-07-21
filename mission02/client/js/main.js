const navigation = getNode(".nav");
const visualImage = getNode(".visual img");
const nickName = getNode(".nickName");

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

navigation.addEventListener("click", handleSlider);

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
