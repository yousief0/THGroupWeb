const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

window.onload = function () {
  const menu_btn = document.querySelector('.humburger');
  const moblile_menu = document.querySelector('.mobile-nav')
  menu_btn.addEventListener('click', function () {
      menu_btn.classList.toggle('is-active');
      moblile_menu.classList.toggle('is-active');
  })
}