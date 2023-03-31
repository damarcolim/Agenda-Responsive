const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

/* function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
 */
function checkBoxes() {
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const boxBottom = box.getBoundingClientRect().bottom;

    if (boxTop < window.innerHeight && boxBottom > 0) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}


