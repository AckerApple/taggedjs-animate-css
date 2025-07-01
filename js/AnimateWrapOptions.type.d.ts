import { ElementEvent } from "./createFx.function.js";
export type fxNames = 'fadeInDown' | 'fadeInUp' | 'fadeOutUp' | 'fadeOutDown' | 'fade';
export type fxCallback = (input: ElementEvent, stagger?: number) => Promise<void>;
export type AnimateWrapOptions = {
    inName?: fxNames;
    outName?: fxNames;
    /** fadeInDown or fadeIn */
    fxIn?: fxCallback;
    /** fadeOutUp or fadeOut */
    fxOut?: (input: ElementEvent, stagger?: number) => Promise<void>;
    /** Ex: .1s */
    duration?: string;
    stagger?: number;
    /** only used when fxIn or fxOut is not provided */
    outPositionAbsolute?: boolean;
};
