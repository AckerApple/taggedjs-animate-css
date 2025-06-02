import { createFx, ElementEvent } from "./createFx.function.js"
import { getInnerHTML, html } from "taggedjs"

export const { in: fadeInDown, out: fadeOutUp } = createFx({fxIn:'fadeInDown', fxOut:'fadeOutUp'})
export const { in: fadeIn, out: fadeOut } = createFx({fxIn:'fadeIn', fxOut:'fadeOut'})

export type AnimateWrapOptions = {
  /** fadeInDown or fadeIn */
  fxIn?: (input: ElementEvent) => Promise<void>
  
  /** fadeOutUp or fadeOut */
  fxOut?: (input: ElementEvent) => Promise<void>
  
  /** Ex: .1s */
  duration: string

  /** only used when fxIn or fxOut is not provided */
  outPositionAbsolute?: boolean
}

/** Use on html elements to have them animated in and out */
export function animateWrap({
  fxIn,
  fxOut,
  duration = '.2s',
  outPositionAbsolute = false,
}: AnimateWrapOptions = {
  duration: '.2s',
  outPositionAbsolute: false,
}) {
  if(!fxIn || !fxOut) {
    const created = createFx({fxIn:'fadeInDown', fxOut:'fadeOutUp', outPositionAbsolute})

    if(!fxIn) {
      fxIn = created.in
    }

    if(!fxOut) {
      fxOut = created.out
    }
  }

  const innerHTML = getInnerHTML()
  return html`
    <div oninit=${fxIn} ondestroy=${fxOut} style.--animate-duration=${duration}>${innerHTML}</div>
  `.acceptInnerHTML(innerHTML)
}

/** Use on html elements, within a loop, to have them animated in and out */
export function animateLoop({
  fxIn,
  fxOut,
  duration = '.2s',
  outPositionAbsolute = true,
}: AnimateWrapOptions = {
  duration: '.2s',
  outPositionAbsolute: true,
}) {
  if(!fxIn || !fxOut) {
    const created = createFx({fxIn:'fadeInDown', fxOut:'fadeOutUp', outPositionAbsolute})

    if(!fxIn) {
      fxIn = created.in
    }

    if(!fxOut) {
      fxOut = created.out
    }
  }

  const innerHTML = getInnerHTML()
  return html`
    <div oninit=${fxIn} ondestroy=${fxOut} style.--animate-duration=${duration}>${innerHTML}</div>
  `.acceptInnerHTML(innerHTML)
}
