export interface CPU {}
export interface Monitor {}
export interface Keyboard {}

export class BasicCPU implements CPU {}
export class BasicMonitor implements Monitor {}
export class BasicKeyboard implements Keyboard {}

export class AdvancedCPU implements CPU {}
export class AdvancedMonitor implements Monitor {}
export class AdvancedKeyboard implements Keyboard {}
