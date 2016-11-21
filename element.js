/** @jsx preact.h */
import preact from 'preact'
import ChartComponent from './components'
export default class MyCustomElement extends BabelHTMLElement {
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.rendered) { this.updateRendering() }
  }

  connectedCallback() {
    this.container = document.createElement('div')
    this.container.className = 'shaf-chart-container'
    this.insertBefore(this.container, this.firstChild)
    this.table = this.querySelector('table')
    this.table.className += ' shaf-screenreader-only'
    this.updateRendering()
  }

  updateRendering() {
    preact.render(<ChartComponent
      table={this.table}
    />, this.container, this.container.lastChild)
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
