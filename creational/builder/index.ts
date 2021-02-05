import { AutoBuilder, ManualBuilder } from "./Builder";
import { Director } from "./Director";

const typeBuilder = (type: string) => {
  if (type == "simple") return new AutoBuilder();
  else return new ManualBuilder();
};

const builder = typeBuilder("simple");
const director = new Director();

const product = director.makeSUVCar(builder);
