import { TextField, CheckBox } from "./Product";

export interface IFieldFactory {
  createTextField(): TextField;
  createCheckBox(): CheckBox;
}

export class JavaFX implements IFieldFactory {
  createTextField(): TextField {
    return new TextField();
  }
  createCheckBox(): CheckBox {
    return new CheckBox();
  }
}

export class WebApp implements IFieldFactory {
  createTextField(): TextField {
    return new TextField();
  }
  createCheckBox(): CheckBox {
    return new CheckBox();
  }
}

export class NullObject implements IFieldFactory {
  createTextField(): TextField {
    throw new Error("Method not implemented.");
  }
  createCheckBox(): CheckBox {
    throw new Error("Method not implemented.");
  }
}
