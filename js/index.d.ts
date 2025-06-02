import { ElementEvent } from "./createFx.function.js";
export declare const fadeInDown: (input: ElementEvent) => Promise<void>, fadeOutUp: (input: ElementEvent) => Promise<void>;
export declare const fadeIn: (input: ElementEvent) => Promise<void>, fadeOut: (input: ElementEvent) => Promise<void>;
export type AnimateWrapOptions = {
    /** fadeInDown or fadeIn */
    fxIn?: (input: ElementEvent) => Promise<void>;
    /** fadeOutUp or fadeOut */
    fxOut?: (input: ElementEvent) => Promise<void>;
    /** Ex: .1s */
    duration: string;
    /** only used when fxIn or fxOut is not provided */
    outPositionAbsolute?: boolean;
};
/** Use on html elements to have them animated in and out */
export declare function animateWrap({ fxIn, fxOut, duration, outPositionAbsolute, }?: AnimateWrapOptions): import("taggedjs").Tag;
/** Use on html elements, within a loop, to have them animated in and out */
export declare function animateLoop({ fxIn, fxOut, duration, outPositionAbsolute, }?: AnimateWrapOptions): import("taggedjs").Tag;
