export function createFx({ fxIn, fxOut, staggerBy = 300, outPositionAbsolute = true, }) {
    return {
        in: (input) => animateInit({ fxName: fxIn, staggerBy, ...input }),
        out: (input) => animateDestroy({ fxName: fxOut, staggerBy, outPositionAbsolute, ...input }),
    };
}
const animateInit = async ({ target, stagger, staggerBy, fxName = 'fadeInDown' }) => {
    target.style.opacity = '0';
    if (stagger) {
        await wait(stagger * staggerBy);
    }
    target.style.opacity = '1';
    target.classList.add('animate__animated', 'animate__' + fxName);
};
const animateDestroy = async ({ target, stagger, outPositionAbsolute = true, fxName = 'fadeOutUp', staggerBy }) => {
    if (outPositionAbsolute) {
        captureElementPosition(target);
    }
    if (stagger) {
        await wait(stagger * staggerBy);
    }
    return new Promise(function (res) {
        // Create a one-time event listener
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
    });
};
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