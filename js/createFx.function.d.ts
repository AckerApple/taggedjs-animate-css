export type ElementEvent = {
    target: HTMLElement;
    stagger: number;
};
export declare function createFx({ fxIn, fxOut, staggerBy, outPositionAbsolute, }: {
    fxIn: string;
    fxOut: string;
    staggerBy?: number;
    outPositionAbsolute?: boolean;
}): {
    in: (input: ElementEvent) => Promise<void>;
    out: (input: ElementEvent) => Promise<void>;
};
export declare function captureElementPosition(element: any): void;
