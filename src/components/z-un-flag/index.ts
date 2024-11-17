import htmlStr from "./index.html?raw"
import cssStr from "./index.scss?inline"

const template = document.createElement("template")
template.innerHTML = `<style>${cssStr}</style>${htmlStr}`

const TAG_NAME = "z-un-flag"
const ATTRIBUTES = ["animate-name"] as const
export class ZUnFlag extends HTMLDivElement {
  static get observedAttributes() {
    return ATTRIBUTES
  }

  initAttribute(name: string, defaultValue: string) {
    if (!this.attributes.getNamedItem(name))
      this.setAttribute(name, defaultValue)
  }

  shadowRoot: ShadowRoot
  rootRef: SVGElement
  bgRef: SVGPathElement
  arcRef: SVGPathElement
  arcLRef: SVGPathElement
  arcRRef: SVGPathElement
  eyeAllRef: SVGGElement
  radarRef: SVGPathElement
  americaRef: SVGPathElement
  cubaRef: SVGPathElement
  dominicanRef: SVGPathElement
  barbadosRef: SVGCircleElement
  bahamasRef: SVGCircleElement
  iceRef: SVGPathElement
  asianRef: SVGPathElement
  ukRef: SVGPathElement

  constructor() {
    super()
    this.shadowRoot = this.attachShadow({ mode: "closed" })
    this.shadowRoot!.appendChild(template.content.cloneNode(true))
    this.setAttribute("is", TAG_NAME)

    this.rootRef = this.shadowRoot.querySelector("#root")!
    this.bgRef = this.shadowRoot.querySelector("#bg")!
    this.arcRef = this.shadowRoot.querySelector("#arc")!
    this.arcLRef = this.shadowRoot.querySelector("#arcL")!
    this.arcRRef = this.shadowRoot.querySelector("#arcR")!
    this.eyeAllRef = this.shadowRoot.querySelector("#eyeAll")!
    this.radarRef = this.shadowRoot.querySelector("#radar")!
    this.americaRef = this.shadowRoot.querySelector("#america")!
    this.cubaRef = this.shadowRoot.querySelector("#cuba")!
    this.dominicanRef = this.shadowRoot.querySelector("#dominican")!
    this.barbadosRef = this.shadowRoot.querySelector("#barbados")!
    this.bahamasRef = this.shadowRoot.querySelector("#bahamas")!
    this.iceRef = this.shadowRoot.querySelector("#ice")!
    this.asianRef = this.shadowRoot.querySelector("#asian")!
    this.ukRef = this.shadowRoot.querySelector("#uk")!
  }

  public get animateName() {
    return this.getAttribute("animate-name")!
  }
  public set animateName(animateName: string) {
    this.setAttribute("animate-name", animateName.toString())
  }

  initAttr() {
    // this.initAttribute("count", "0")
  }

  connectedCallback() {
    this.initAttr()
    setTimeout(() => {
      // this.bgRef.style.fill = "red"
      // this.arcRef.style.fill = "red"
      // this.arcLRef.style.fill = "red"
      // this.arcRRef.style.fill = "red"
      //------------------------------------
      // this.eyeAllRef.style.fill = "red"
      // this.radarRef.style.fill = "red"
      // this.americaRef.style.fill = "red"
      // this.cubaRef.style.fill = "red"
      // this.dominicanRef.style.fill = "red"
      // this.barbadosRef.style.fill = "red"
      // this.bahamasRef.style.fill = "red"
      // this.iceRef.style.fill = "red"
      // this.asianRef.style.fill = "red"
      // this.ukRef.style.fill = "red"
    }, 2000)
  }
  disconnectedCallback() {}

  attributeChangedCallback(
    attributeName: (typeof ATTRIBUTES)[number],
    oldValue: string,
    newValue: string,
  ) {
    switch (attributeName) {
      case "animate-name":
        this.animateNameUpdate(oldValue, newValue)
        break
    }
  }

  animateNameUpdate(_oldName: string, newName: string) {
    this.rootRef.setAttribute("class", newName)
  }
}

customElements.define(TAG_NAME, ZUnFlag, { extends: "div" })
