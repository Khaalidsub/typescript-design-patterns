import { Dialog, WindowsDialog, HTMLDialog } from "./Dialog";

const $init = (os: string) => {
  let dialog: Dialog;
  if (os === "Windows") dialog = new WindowsDialog();
  else if (os === "Web") dialog = new HTMLDialog();
  return dialog;
};

const $render = (dialag: Dialog) => dialag.render();

const dialog = $init("Windows");
$render(dialog);
