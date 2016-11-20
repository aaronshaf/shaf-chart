/** @jsx preact.h */
import preact from 'preact'
import ChartComponent from './components'
export default class MyCustomElement extends BabelHTMLElement {
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.rendered) { this.updateRendering() }
  }

  connectedCallback() {
    this.table = this.querySelector('table')
    // this.table.className += ' shaf-toggle-screenreader-only'
    this.updateRendering()
  }

  updateRendering() {
    preact.render(<ChartComponent
      table={this.table}
    />, this, this.lastChild)
    this.rendered = true
  }
}

// https://github.com/w3c/webcomponents/issues/587#issuecomment-254126763
function BabelHTMLElement() {
  const newTarget = this.__proto__.constructor
  return Reflect.construct(HTMLElement, [], newTarget)
}
Object.setPrototypeOf(BabelHTMLElement, HTMLElement)
Object.setPrototypeOf(BabelHTMLElement.prototype, HTMLElement.prototype)
