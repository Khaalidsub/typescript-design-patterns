import {
  AdvancedCPU,
  AdvancedKeyboard,
  AdvancedMonitor,
  BasicCPU,
  BasicKeyboard,
  BasicMonitor,
  CPU,
  Keyboard,
  Monitor,
} from "./Product";

export interface IComputerParts {
  createMonitor(): Monitor;
  createCPU(): CPU;
  createKeyboard(): Keyboard;
}

export class AdvancedComputerParts implements IComputerParts {
  createMonitor(): Monitor {
    throw new AdvancedMonitor();
  }
  createCPU(): CPU {
    throw new AdvancedCPU();
  }
  createKeyboard(): Keyboard {
    throw new AdvancedKeyboard();
  }
}

export class BasicComputerParts implements IComputerParts {
  createMonitor(): Monitor {
    throw new BasicMonitor();
  }
  createCPU(): CPU {
    throw new BasicCPU();
  }
  createKeyboard(): Keyboard {
    throw new BasicKeyboard();
  }
}
