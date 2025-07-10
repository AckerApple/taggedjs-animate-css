export function createFx({ fxIn, fxOut, 
// staggerBy = 300,
outPositionAbsolute = true, }) {
    return {
        in: (input, stagger) => animateInit({
            fxName: fxIn,
            ...input,
        }, stagger),
        out: (input, stagger) => animateDestroy({
            fxName: fxOut,
            outPositionAbsolute,
            ...input,
        }, stagger),
    };
}
const animateInit = async ({ target, fxName = 'fadeInUp' }, stagger) => {
    target.style.opacity = '0';
    if (stagger) {
        await wait(stagger);
    }
    target.style.opacity = '1';
    return addClassesTo(fxName, target);
};
const animateDestroy = async ({ target, outPositionAbsolute = true, fxName = 'fadeOutUp', }, stagger) => {
    if (outPositionAbsolute) {
        captureElementPosition(target);
    }
    if (stagger) {
        await wait(stagger);
    }
    return addClassesTo(fxName, target);
};
function addClassesTo(fxName, target) {
    let res;
    const promise = new Promise(function resinate(resolve) {
        res = resolve;
    });
    function handleAnimationEnd(event) {
        // Optional: make sure the event is from the target element
        if (event.target !== target)
            return;
        // Clean up
        target.classList.remove('animate__animated', 'animate__' + fxName);
        target.removeEventListener('animationend', handleAnimationEnd);
        res(undefined);
    }
    target.classList.add('animate__animated', 'animate__' + fxName);
    target.addEventListener('animationend', handleAnimationEnd);
    return promise;
}
// absolute
export function captureElementPosition(element) {
    element.style.zIndex = element.style.zIndex || 1;
    const toTop = element.offsetTop + 'px';
    const toLeft = element.offsetLeft + 'px';
    const toWidth = (element.clientWidth + (element.offsetWidth - element.clientWidth) + 1) + 'px';
    const toHeight = (element.clientHeight + (element.offsetHeight - element.clientHeight) + 1) + 'px';
    const fix = () => {
        element.style.top = toTop;
        element.style.left = toLeft;
        element.style.width = toWidth;
        element.style.height = toHeight;
        element.style.position = 'absolute';
    };
    // element.style.position = 'fixed'
    // allow other elements that are being removed to have a moment to figure out where they currently sit
    setTimeout(fix, 0);
}
function wait(time) {
    return new Promise((res) => {
        setTimeout(res, time);
    });
}
//# sourceMappingURL=createFx.function.js.map