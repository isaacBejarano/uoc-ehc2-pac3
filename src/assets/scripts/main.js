/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

// TODO: docu
// open "modal"
document.opennModal = (bg = null, dialog = null) => {
  if (!bg) throw new ReferenceError("Modal background not defined");
  if (!dialog) throw new ReferenceError("Modal dialog not defined");

  const modalBg = document.getElementById(bg);
  const modalDialog = document.getElementById(dialog);
  modalBg.classList.remove("hidden");
  modalDialog.classList.remove("hidden");
};

// TODO: docu
// close "modal"
document.closeModal = (bg = null, dialog = null) => {
  if (!bg) throw new ReferenceError("Modal background not defined");
  if (!dialog) throw new ReferenceError("Modal dialog not defined");

  const modalBg = document.getElementById(bg);
  const modalDialog = document.getElementById(dialog);
  modalBg.classList.add("hidden");
  modalDialog.classList.add("hidden");
};

// toggle collapse of "references" list in index.html
document.collapse = (toggler = null, icon = null, target = null) => {
  if (!toggler) throw new ReferenceError("Accordion toggler not defined");
  if (!icon) throw new ReferenceError("Accordion icon not defined");
  if (!target) throw new ReferenceError("Accordion list not defined");

  const btn = document.getElementById(toggler);
  const btnIcon = document.getElementById(icon);
  const list = document.getElementById(target);

  btn.classList.toggle("bg-secondary-shade");
  btn.classList.toggle("text-primary-subtle");
  btn.classList.toggle("bg-primary-subtle");
  btn.classList.toggle("text-secondary-shade");
  btnIcon.style.transform =
    btnIcon.style.transform === "rotate(0deg)" ||
    btnIcon.style.transform.length === 0
      ? "rotate(180deg)"
      : "rotate(0deg)";
  list.classList.toggle("hidden");
};

////
// Data Injection
////

const fragment = (route) => route.replace(".html", "").split("/").pop();
const dedasher = (str) =>
  str
    .split("-")
    .filter((ch) => ch.length)
    .join(" ");
const capitalize = (str) =>
  str
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

// <title>
////

((title, fragment) => {
  const headTitle = document.getElementById("js-head-title");
  const route = window.location.pathname;
  const routeFragment = fragment(route);
  const dedashedFragment = dedasher(routeFragment);
  const capitalizedFragment = capitalize(dedashedFragment);
  headTitle.textContent =
    title + (routeFragment === "index" ? "" : ` | ${capitalizedFragment}`);
})("Circular Economy 101", fragment);

// .nav-link
////

((fragment) => {
  const navLinks = document.getElementsByClassName("js-nav-link");

  for (const navLink of navLinks) {
    const route =
      fragment(navLink.href) === "index"
        ? "home"
        : dedasher(fragment(navLink.href));
    navLink.textContent = route;
  }
})(fragment);
