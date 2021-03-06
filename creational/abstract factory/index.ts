import { IFieldFactory, JavaFX, NullObject, WebApp } from "./Facotory";

class Client {
  private factory: IFieldFactory;
  constructor(private name: string) {
    this.factory = this.$init(name);
  }
  $init(typeFactory: string) {
    let factory: IFieldFactory;

    if (typeFactory === "Java") {
      factory = new JavaFX();
    } else if (typeFactory == "Web") factory = new WebApp();
    else {
      factory = new NullObject();
    }
    return factory;
  }
  create() {
    this.factory.createCheckBox();
  }
}

const client = new Client("Java");
client.create();
