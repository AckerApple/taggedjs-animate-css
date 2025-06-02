import { createFx } from "./createFx.function.js";
import { getInnerHTML, html } from "taggedjs";
export const { in: fadeInDown, out: fadeOutUp } = createFx({ fxIn: 'fadeInDown', fxOut: 'fadeOutUp' });
export const { in: fadeIn, out: fadeOut } = createFx({ fxIn: 'fadeIn', fxOut: 'fadeOut' });
export const animateWrap = ({ fxIn = fadeInDown, fxOut = fadeOutUp, duration = '.2s', } = {
    fxIn: fadeInDown,
    fxOut: fadeOutUp,
    duration: '.2s',
}) => {
    const innerHTML = getInnerHTML();
    return html `
    <div oninit=${fxIn} ondestroy=${fxOut} style.--animate-duration=${duration}>${innerHTML}</div>
  `.acceptInnerHTML(innerHTML);
};
//# sourceMappingURL=index.js.map