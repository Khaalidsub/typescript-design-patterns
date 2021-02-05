import { IButton, WindowsButton, HTMLButton } from "./Button";

export abstract class Dialog {
  abstract createButton(): IButton;
  render() {
    let okButton = this.createButton();
    okButton.render;
    okButton.onClick(event);
  }
}

export class WindowsDialog extends Dialog {
  createButton(): IButton {
    return new WindowsButton();
  }
}

export class HTMLDialog extends Dialog {
  createButton(): IButton {
    return new HTMLButton();
  }
}
