export interface IButton {
  //rendering the button
  render(a: number, b: number): void;
  //even when user clicked
  onClick(event: Event): void;
}

export class WindowsButton implements IButton {
  render(a: number, b: number): void {
    throw new Error("Method not implemented.");
  }
  onClick(event: Event): void {
    throw new Error("Method not implemented.");
  }
}

export class HTMLButton implements IButton {
  render(a: number, b: number): void {
    throw new Error("Method not implemented.");
  }
  onClick(event: Event): void {
    throw new Error("Method not implemented.");
  }
}
