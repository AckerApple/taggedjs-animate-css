import { html, states, tag } from "taggedjs"
import { animateWrap, animateLoop } from "taggedjs-animate-css"

export const app = tag(() => {
  let showHide = false

  states(get => [{ showHide }] = get({ showHide }))

  return html`
    hello world
    ${showHide && (animateWrap().innerHTML = html`
      Hello animated world 33
    `)}
    ${showHide && (animateLoop().innerHTML = html`
      Hello animated world 33
    `)}
    <button type="button" onclick=${() => showHide = !showHide}>show/hide ${showHide}</button>
  `
})
