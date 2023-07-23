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
