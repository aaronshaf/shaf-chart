/** @jsx preact.h */
import preact from 'preact'
import ChartComponent from './components'
import HTMLElement from 'babel-html-element'

export default class ShafChartElement extends HTMLElement {
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.rendered) { this.updateRendering() }
  }

  connectedCallback() {
    this.container = document.createElement('div')
    this.container.className = 'shaf-chart-container'
    this.insertBefore(this.container, this.firstChild)
    this.table = this.querySelector('table')
    if (MutationObserver) {
      this.observer = new MutationObserver((mutations) => {
        this.updateRendering()
      })
      const observerConfig = { attributes: true, childList: true, characterData: true, subtree: true }
      this.observer.observe(this.table, observerConfig)
    }
    Object.assign(this.table.style, {
      border: '0',
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: '0',
      position: 'fixed',
      width: '1px'
    })
    this.updateRendering()
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect()
    }
  }

  updateRendering() {
    preact.render(<ChartComponent
      table={this.table}
    />, this.container, this.container.lastChild)
    this.rendered = true
  }
}
