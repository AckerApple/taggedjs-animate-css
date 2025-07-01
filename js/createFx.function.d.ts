export type ElementEvent = {
    target: HTMLElement;
};
export declare function createFx({ fxIn, fxOut, outPositionAbsolute, }: {
    fxIn: string;
    fxOut: string;
    outPositionAbsolute?: boolean;
}): {
    in: (input: ElementEvent, stagger?: number) => Promise<void>;
    out: (input: ElementEvent, stagger?: number) => Promise<void>;
};
export declare function captureElementPosition(element: any): void;
