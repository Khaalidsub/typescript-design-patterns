import { Car } from "./models/Car";
import { Auto } from "./models/Auto";
import { Manual } from "./models/Manual";

export interface IBuilder {
  reset(): void;
  setSeats(seats: Number): void;
  setEngine(engine: String): void;
  setGPS(): void;
  getResult(): Car;
}

export class AutoBuilder implements IBuilder {
  private auto: Auto;
  reset(): void {
    throw new Error("Method not implemented.");
  }
  setSeats(seats: Number): void {
    throw new Error("Method not implemented.");
  }
  setEngine(engine: String): void {
    throw new Error("Method not implemented.");
  }
  setGPS(): void {
    throw new Error("Method not implemented.");
  }
  getResult(): Car {
    throw new Error("Method not implemented.");
  }
}

export class ManualBuilder implements IBuilder {
  private manual: Manual;
  reset(): void {
    throw new Error("Method not implemented.");
  }
  setSeats(seats: Number): void {
    throw new Error("Method not implemented.");
  }
  setEngine(engine: String): void {
    throw new Error("Method not implemented.");
  }
  setGPS(): void {
    throw new Error("Method not implemented.");
  }
  getResult(): Car {
    throw new Error("Method not implemented.");
  }
}
