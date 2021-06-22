import { $ } from "./tools.js";

const $loginBtn = $("#login-btn");
const $dialog = $("dialog");

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") $dialog.close();
});
$dialog.addEventListener("click", (e) => e.stopPropagation());
document.addEventListener("click", (e) => $dialog.close());
$loginBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  $dialog.show();
});
