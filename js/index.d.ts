import { AnimateWrapOptions } from "./AnimateWrapOptions.type.js";
import { ElementEvent } from "./createFx.function.js";
import { HostValue } from "taggedjs";
export { fxNames } from './AnimateWrapOptions.type.js';
/** preferred */
export declare const fadeInUp: (input: ElementEvent, stagger?: number | undefined) => Promise<void>, fadeOutDown: (input: ElementEvent, stagger?: number | undefined) => Promise<void>;
export declare const fadeInDown: (input: ElementEvent, stagger?: number | undefined) => Promise<void>, fadeOutUp: (input: ElementEvent, stagger?: number | undefined) => Promise<void>;
export declare const fadeIn: (input: ElementEvent, stagger?: number | undefined) => Promise<void>, fadeOut: (input: ElementEvent, stagger?: number | undefined) => Promise<void>;
/** Group created animations together with staggering */
export declare const fxGroup: ({ stagger, fxIn, fxOut, duration, inName, outName, outPositionAbsolute, }?: AnimateWrapOptions) => HostValue;
/** Used as a host on element. <div ${fx()}> */
export declare const fx: ({ fxIn, fxOut, stagger, inName, outName, duration, outPositionAbsolute, }?: AnimateWrapOptions) => HostValue;
