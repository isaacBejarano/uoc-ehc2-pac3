/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
// TODO: JavaScript (modal y accordion)
// TODO: no és necessari que reescriguis la part de JS necessària per a què funcioni correctament (per exemple, si has fet servir un navbar, només cal que amaguis el menú versió desktop i que mostris la icona de l’hamburguesa, però no cal que en fer-hi clic es desplegui o es replegui el menú)

/**
 * Write any other JavaScript below
 */

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
  const navLinks = document.getElementsByClassName("nav-link");

  for (const navLink of navLinks) {
    const route =
      fragment(navLink.href) === "index"
        ? "home"
        : dedasher(fragment(navLink.href));
    navLink.textContent = route;
  }
})(fragment);
