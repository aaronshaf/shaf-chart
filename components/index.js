/** @jsx preact.h */

import preact, { Component } from 'preact'
import classNames from 'classnames'

export default class ChartComponent extends Component {
  constructor (props) {
    super(props)
    this.setCanvas = this.setCanvas.bind(this)
  }

  setCanvas (node) { this.canvas = node }

  componentDidMount () {
    const backgroundColors = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ]
    const borderColors = [
      '#FF0033',
      '#008DEB',
      '#FFBC00',
      '#00C1C1',
      '#752FFF',
      '#FF9122'
    ]

    let datasets = []
    this.props.table.querySelector('thead tr').querySelectorAll('th').forEach((th, index) => {
      if (index === 0) return
      datasets.push({
        label: th.textContent,
        data: [],
        backgroundColor: backgroundColors.slice(index - 1, index),
        borderColor: borderColors.slice(index - 1, index)
      })
    })
    const tbodyRows = this.props.table.querySelectorAll('tbody tr')
    tbodyRows.forEach((row) => {
      row.querySelectorAll('td').forEach((td, index) => {
        datasets[index].data.push(parseFloat(td.textContent))
      })
    })
    let labels = []
    tbodyRows.forEach((row) => {
      const label = row.querySelector('th').textContent
      labels.push(label)
    })
    new Chart(this.canvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }

  render () {
    return (
      <div style="width: 600px;height: 300px;">
        <canvas ref={this.setCanvas} width="600" height="300"></canvas>
      </div>
    )
  }
}

ChartComponent.displayName = 'ChartComponent'
