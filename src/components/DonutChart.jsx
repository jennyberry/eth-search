import React from 'react'
/* import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend) */


import Chart from 'react-apexcharts';

const DonutChart = () => {
   /*  const data = {
        labels: ['Distrbuted', 'Remaining'],
        datasets: [{
            label: 'Funding',
            data: ['25.9', '12.4'],
            backgroundColor: ['#5368F3', '#FFC403'],
            borderColor: ['#5368F3', '#FFC403'],
        }]
    }
    const options = {
        plugins: {
            legend: {
                display: false
            }
       }

    }
    const summary = {
        id: 'summary',
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data } = chart
            ctx.save()
            ctx.font = 'bold 12px sans-serif';
            ctx.fillStyle = 'black'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText( `38,5M <br/> total fund requested`,chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)

            // ctx.fillText(`${data.datasets[0].data[0]} total fund requested`,chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    } */
  return (
      <div className='max-w-[400px]'>
         {/*  <Doughnut
          data = {data}
              options={options}
              plugins = {[summary]}
          >

          </Doughnut> */}
<React.Fragment>
            <div className='container-fluid mt-3 mb-3'>
                  <Chart
                      type="donut"
                      width={450}
                      height={450}
                      series={[25900000, 12400000]}

                      options={{
                          labels: ['Distributed', 'Remaining'],
                          legend: {
                              show: false,
                              position: "bottom",
                              labels: {
                                colors: ['#5368F3', '#FFC403'],
                                useSeriesColors: false,
                            },
                          },
                          fill: {
                              colors: ['#5368F3', '#FFC403']
                          },
                          tooltip: {
                            enabled: true,
                              fillSeriesColor: true,
                              style: {
                                fontSize: '16px',
                                fontFamily: 'nunito'
                              },
                              followCursor: true,

                          },
                          colors: ['#5368F3', '#FFC403'],
                          states: {
                            hover: {
                                filter: {
                                    type: 'lighten',
                                    value:'0.1'
                                }
                            },
},
            //  title:{
            //     text:"Funding",
            //    align:"center",
            //  },

             plotOptions:{
             pie:{
                     donut: {

                     labels: {
                             show: true,
                             value: {
                                show: true,
                                fontSize: '16px',
                                colors: '#f90000',
                       },
                        total:{
                            show:true,
                            // showAlways:true, //show number when hover
                             //formatter: () => '343',
                            fontSize: 30,
                            fontFamily: 'nunito'
                            // color: '#f90000',
                             },

                    }
                }
             }

             },

             dataLabels:{
                enabled:false, //percentage on the chart
             }


            }}

            />

            </div>
        </React.Fragment>
    </div>
  )
}

export default DonutChart