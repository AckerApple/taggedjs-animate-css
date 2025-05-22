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
};
export declare const animateWrap: ({ fxIn, fxOut, duration, }?: AnimateWrapOptions) => import("taggedjs").Tag;
