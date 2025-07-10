import { AnimateWrapOptions, fxCallback } from "./AnimateWrapOptions.type.js"
import { createFx, ElementEvent } from "./createFx.function.js"
import { addPaintRemoveAwait, getInnerHTML, host, html, HostCallback, HostValue } from "taggedjs"

export { fxNames } from './AnimateWrapOptions.type.js'

/** preferred */
export const { in: fadeInUp, out: fadeOutDown } = createFx({
  fxIn:'fadeInUp',
  fxOut:'fadeOutDown'
})

export const { in: fadeInDown, out: fadeOutUp } = createFx({
  fxIn:'fadeInDown',
  fxOut:'fadeOutUp'
})

export const { in: fadeIn, out: fadeOut } = createFx({
  fxIn:'fadeIn',
  fxOut:'fadeOut',
})

/** Group created animations together with staggering */
export const fxGroup = ({
  stagger = 100,
  fxIn, fxOut,
  duration = '2s',
  inName = 'fadeInUp',
  outName = 'fadeOutDown',
  outPositionAbsolute = false,
}: AnimateWrapOptions = {}
): HostValue => {
  let staggerTime = 0

  const setup = setupFx(
    function onInit(element) {
      element.style.setProperty('--animate-duration', duration)
      const totalStagger = stagger * (staggerTime++)
      return setup.fxIn({ target: element } as any as ElementEvent, totalStagger).then(() => {
        --staggerTime
      })
    },
    function onDestroy(element) {
      element.style.setProperty('--animate-duration', duration)
      const totalStagger = stagger * (staggerTime++)
      const destroyPromise = setup.fxOut({ target: element } as any as ElementEvent, totalStagger).then(() => {
        --staggerTime
      })
      addPaintRemoveAwait(destroyPromise)
      return destroyPromise
    },
    fxIn,
    fxOut,
    inName, outName,
    // stagger,
    outPositionAbsolute
  )

  return setup.host
}

/** Used as a host on element. <div ${fx()}> */
export const fx = ({
  fxIn, fxOut, stagger,
  inName = 'fadeInUp',
  outName = 'fadeOutDown',
  duration = '.2s',
  outPositionAbsolute = false,
}: AnimateWrapOptions = {}
): HostValue => {
  const setup = setupFx(
    (element) => {
      element.style.setProperty('--animate-duration', duration)
      return setup.fxIn({ target: element } as any as ElementEvent, stagger)
    },
    (element) => {
      element.style.setProperty('--animate-duration', duration)
      const destroyPromise = setup.fxOut({ target: element } as any as ElementEvent, stagger)
      addPaintRemoveAwait(destroyPromise)
      return destroyPromise
    },
    fxIn,
    fxOut,
    inName, outName,
    // stagger,
    outPositionAbsolute
  )

  return setup.host
}

function setupFx(
  onInit: HostCallback,
  onDestroy: HostCallback,
  fxIn: fxCallback | undefined,
  fxOut: fxCallback | undefined,
  inName: string,
  outName: string,
  // stagger: number | undefined,
  outPositionAbsolute: boolean | undefined,
) {
  if (!fxIn || !fxOut) {
    const created = createFx({
      fxIn: inName,
      fxOut: outName,
      // staggerBy: stagger,
      outPositionAbsolute,
    })

    if (!fxIn) {
      fxIn = created.in
    }

    if (!fxOut) {
      fxOut = created.out
    }
  }

  return {
    fxIn, fxOut,
    host : host(() => undefined, {
      onInit,
      onDestroy,
    })
  }
}

/** @deprecated - Instead use <div ${fx()}> ... Use on html elements to have them animated in and out */
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
    const created = createFx({
      fxIn:'fadeInUp',
      fxOut:'fadeOutDown',
      outPositionAbsolute,
    })

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
    const created = createFx({
      fxIn:'fadeInUp',
      fxOut:'fadeOutDown',
      outPositionAbsolute
    })

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
