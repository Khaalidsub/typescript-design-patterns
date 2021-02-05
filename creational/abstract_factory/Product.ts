export interface EventField {
  render(): void;
  returnValue(): any;
}

export class TextField implements EventField {
  render(): void {
    console.log("render textfield");
  }
  returnValue(): String {
    return "value";
  }
}

export class CheckBox implements EventField {
  render(): void {
    console.log("render checkbox");
  }
  returnValue() {
    return true;
  }
}
