function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  const img = document.querySelector("#profile img");
  let desc = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }

  if (html.classList.contains("light")) {
    desc.setAttribute("alt", "avatar light");
  } else {
    desc.setAttribute("alt", "avatar dark");
  }
}
