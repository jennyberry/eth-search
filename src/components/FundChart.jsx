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
    //convert number to string with commas
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    // console.log(typeof (numberWithCommas(10000)))
    return (

        <div className='max-w-[1000px]'>
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
                        height={550}
                        series={[25900000, 12400000]}

                        options={{
                            labels: ['Distributed', 'Remaining'],
                            legend: {
                                show: true,
                                position: "bottom",
                                labels: {
                                    colors: ['#5368F3', '#FFC403'],
                                    useSeriesColors: false,
                                },
                                style: {
                                    fontSize: '16px',
                                    fontFamily: 'nunito'
                                },
                                itemMargin: {
                                    vertical: 10
                                },
                                formatter: function (seriesName, opts) {
                                    return '<div class="legend-section">' + '<div class="label-data">' + seriesName + '</div>' + '<div class="numbers">' + '$' + numberWithCommas(opts.w.globals.series[opts.seriesIndex]) + '</div>' + '</div>' + '</div>'
                                }
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

                            },
                            colors: ['#5368F3', '#FFC403'],
                            states: {
                                hover: {
                                    filter: {
                                        type: 'lighten',
                                        value: '0.1'
                                    }
                                },
                            },
                            title: {
                                text: "Funding",
                                align: "center",
                                style: {
                                    fontSize: '20px',
                                    fontFamily: 'nunito'
                                },
                            },

                            plotOptions: {
                                pie: {
                                    donut: {
                                        labels: {
                                            show: true,
                                            value: { //style for total values
                                                show: true,
                                                fontSize: '30px',
                                                colors: '#f90000',
                                                fontFamily: 'nunito',
                                                fontWeight: '600'
                                            },
                                            total: {
                                                show: true,
                                                showAlways: true, //disable show tooltips in the middle when hover
                                                //formatter: () => '343',
                                                label: 'Total fund requested',
                                                fontSize: 15,
                                                fontFamily: 'nunito',
                                                fontWeight: 600,
                                                // color: '#f90000',
                                                formatter: function (w) {
                                                    // numberWithCommas(w)
                                                    return '$' + numberWithCommas(w.globals.seriesTotals.reduce((a, b) => {
                                                        return (a + b)

                                                    }, 0))

                                                }
                                            },

                                        }
                                    }
                                }

                            },

                            dataLabels: {
                                enabled: false, //percentage on the chart
                            }


                        }}

                    />

                </div>
            </React.Fragment>
        </div>
    )
}

export default DonutChart