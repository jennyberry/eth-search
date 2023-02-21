import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend)

const DonutChart = () => {
    const data = {
        labels: ['Distrbuted', 'Remaining'],
        datasets: [{
            label: 'Funding',
            data: ['25.9', '12.4'],
            backgroundColor: ['#5368F3', '#FFC403'],
            borderColor: ['#5368F3', '#FFC403'],
        }]
    }
    const options = {

    }
  return (
      <div className='max-w-[400px]'>
          <Doughnut
          data = {data}
          options = {options}
          >

          </Doughnut>
    </div>
  )
}

export default DonutChart