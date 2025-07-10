export type ElementEvent = {
  target: HTMLElement
  // stagger: number
}

type ElementFxEvent = ElementEvent & {
  fxName: string
  // staggerBy?: number
}

type ElementFxOutEvent = ElementFxEvent & {
  outPositionAbsolute: boolean
}

export function createFx({
  fxIn,
  fxOut,
  // staggerBy = 300,
  outPositionAbsolute = true,
}: {
  fxIn: string
  fxOut: string
  // staggerBy?: number
  outPositionAbsolute?: boolean,
}) {
  return {
    in: (input: ElementEvent, stagger?: number) =>
      animateInit({
        fxName: fxIn,
        ...input,
      }, stagger),
    
    out: (
      input: ElementEvent,
      stagger?: number
    ) =>
      animateDestroy({
        fxName: fxOut,
        outPositionAbsolute,
        ...input,
      }, stagger),
  }
}

const animateInit = async (
  {
    target,
    fxName = 'fadeInUp'
  }: ElementFxEvent,
  stagger?: number
) => {/* animateInit */
  target.style.opacity = '0'
  
  if(stagger) {
    await wait(stagger)
  }

  target.style.opacity = '1'
  return addClassesTo(fxName, target)
}

const animateDestroy = async (
  {
    target,
    outPositionAbsolute=true,
    fxName = 'fadeOutUp',
  }: ElementFxOutEvent,
  stagger?: number
) => {/* animateDestroy */
  if(outPositionAbsolute) {
    captureElementPosition(target)
  }

  if(stagger) {
    await wait(stagger)
  }

  return addClassesTo(fxName, target)
}

function addClassesTo(
  fxName: string,
  target: Element,
) {
  let res: any

  const promise = new Promise<void>(function resinate(resolve) {
    res = resolve
  })

  function handleAnimationEnd(event: any) {  
    // Optional: make sure the event is from the target element
    if (event.target !== target) return;

    // Clean up
    target.classList.remove('animate__animated', 'animate__' + fxName);
    target.removeEventListener('animationend', handleAnimationEnd);
    res(undefined)
  }

  target.classList.add('animate__animated', 'animate__' + fxName)
  target.addEventListener('animationend', handleAnimationEnd)

  return promise
}

// absolute
export function captureElementPosition(element: any) {
  element.style.zIndex = element.style.zIndex || 1
  const toTop = element.offsetTop + 'px'
  const toLeft = element.offsetLeft + 'px'  
  const toWidth = (element.clientWidth + (element.offsetWidth - element.clientWidth) + 1) + 'px'
  const toHeight = (element.clientHeight + (element.offsetHeight - element.clientHeight) + 1) + 'px'

  const fix = () => {
    element.style.top = toTop
    element.style.left = toLeft  
    element.style.width = toWidth
    element.style.height = toHeight
    element.style.position = 'absolute'
  }

  // element.style.position = 'fixed'
  // allow other elements that are being removed to have a moment to figure out where they currently sit
  setTimeout(fix, 0)
}

function wait(time: number) {
  return new Promise((res) => {
    setTimeout(res, time)
  })
}
