const shadowButton = document.querySelector(".add-shadow");
const changeLinesButton = document.querySelector(".change-lines");
const spanItems = document.querySelectorAll("span");

const addShadowOnClick = () => {
  spanItems.forEach((element) => element.classList.toggle("add-box-shadow"));
};

const getRandom = () => {
  return Math.random().toFixed(2) * 100;
};

const changeLinesOnClick = () => {
  spanItems.forEach(
    (element) =>
      (element.style.borderRadius = `${getRandom()}% ${getRandom()}% ${getRandom()}% ${getRandom()}% / ${getRandom()}% ${getRandom()}% ${getRandom()}% ${getRandom()}%`)
  );
};

shadowButton.addEventListener("click", addShadowOnClick);
changeLinesButton.addEventListener("click", changeLinesOnClick);
