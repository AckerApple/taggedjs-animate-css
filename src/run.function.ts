import { tagElement } from "taggedjs"
import { app } from "./app.tag"

export const run = () => {// app.ts
  console.info('attaching app to element...')
  const element = document.getElementsByTagName('app')[0]
  tagElement(app, element, {test:1})
}
