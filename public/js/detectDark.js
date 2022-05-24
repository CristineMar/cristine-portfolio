let favicon = document.getElementById("favicon");

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  favicon.href = "./icon-dark.png";
} else {
  favicon.href = "./icon.png";
}
