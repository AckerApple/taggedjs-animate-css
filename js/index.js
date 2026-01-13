import { createFx } from "./createFx.function.js";
import { host } from "taggedjs";
/** preferred */
export const { in: fadeInUp, out: fadeOutDown } = createFx({
    fxIn: 'fadeInUp',
    fxOut: 'fadeOutDown'
});
export const { in: fadeInDown, out: fadeOutUp } = createFx({
    fxIn: 'fadeInDown',
    fxOut: 'fadeOutUp'
});
export const { in: fadeIn, out: fadeOut } = createFx({
    fxIn: 'fadeIn',
    fxOut: 'fadeOut',
});
/** Group created animations together with staggering */
export const fxGroup = ({ stagger = 100, fxIn, fxOut, duration = '2s', inName = 'fadeInUp', outName = 'fadeOutDown', outPositionAbsolute = false, } = {}) => {
    let staggerTime = 0;
    const setup = setupFx(function onInit(element) {
        element.style.setProperty('--animate-duration', duration);
        const totalStagger = stagger * (staggerTime++);
        return setup.fxIn({ target: element }, totalStagger).then(() => {
            --staggerTime;
        });
    }, function onDestroy(element) {
        element.style.setProperty('--animate-duration', duration);
        const totalStagger = stagger * (staggerTime++);
        const destroyPromise = setup.fxOut({ target: element }, totalStagger).then(() => {
            --staggerTime;
        });
        // addPaintRemoveAwait(destroyPromise)
        return destroyPromise;
    }, fxIn, fxOut, inName, outName, 
    // stagger,
    outPositionAbsolute);
    return setup.host;
};
/** Used as a host on element. <div ${fx()}> */
export const fx = ({ fxIn, fxOut, stagger, inName = 'fadeInUp', outName = 'fadeOutDown', duration = '.2s', outPositionAbsolute = false, } = {}) => {
    const setup = setupFx((element) => {
        element.style.setProperty('--animate-duration', duration);
        return setup.fxIn({ target: element }, stagger);
    }, (element) => {
        element.style.setProperty('--animate-duration', duration);
        const destroyPromise = setup.fxOut({ target: element }, stagger);
        // addPaintRemoveAwait(destroyPromise)
        return destroyPromise;
    }, fxIn, fxOut, inName, outName, 
    // stagger,
    outPositionAbsolute);
    return setup.host;
};
function setupFx(onInit, onDestroy, fxIn, fxOut, inName, outName, 
// stagger: number | undefined,
outPositionAbsolute) {
    if (!fxIn || !fxOut) {
        const created = createFx({
            fxIn: inName,
            fxOut: outName,
            // staggerBy: stagger,
            outPositionAbsolute,
        });
        if (!fxIn) {
            fxIn = created.in;
        }
        if (!fxOut) {
            fxOut = created.out;
        }
    }
    return {
        fxIn, fxOut,
        host: host(() => undefined, {
            onInit,
            onDestroy,
        })
    };
}
//# sourceMappingURL=index.js.map