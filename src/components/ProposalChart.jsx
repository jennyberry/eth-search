import React from 'react'
import Chart from 'react-apexcharts';

const ProposalChart = () => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    return (

        <div className='max-w-[1000px]'>
            <React.Fragment>
                <div className='container-fluid mt-3 mb-3'>
                    <Chart
                        type="donut"
                        width={400}
                        height={550}
                        series={[405, 1155, 4556]}

                        options={{
                            labels: ['Completed ideas', 'Funded ideas', 'Ideas proposed'],
                            legend: {
                                show: true,
                                position: "bottom",
                                labels: {
                                    colors: ['#5368F3', '#FFC403', "#D9D9D9"],
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
                                    return '<div class="legend-section">' + '<div class="label-data">' + seriesName + '</div>' + '<div class="numbers">' + numberWithCommas(opts.w.globals.series[opts.seriesIndex]) + '</div>' + '</div>' + '</div>'
                                }
                            },
                            fill: {
                                colors: ['#5368F3', '#FFC403', "#D9D9D9"]
                            },
                            tooltip: {
                                enabled: true,
                                fillSeriesColor: true,
                                style: {
                                    fontSize: '16px',
                                    fontFamily: 'nunito'
                                },

                            },
                            colors: ['#5368F3', '#FFC403', "#D9D9D9"],
                            states: {
                                hover: {
                                    filter: {
                                        type: 'lighten',
                                        value: '0.1'
                                    }
                                },
                            },
                            title: {
                                text: "Ideas proposed",
                                align: "left",
                                style: {
                                    fontSize: '20px',
                                    fontFamily: 'nunito'
                                },
                            },

                            plotOptions: {
                                pie: {
                                    donut: {
                                        size: "75%",
                                        labels: {
                                            show: true,
                                            value: { //style for total values
                                                show: true,
                                                fontSize: '25px',
                                                colors: '#f90000',
                                                fontFamily: 'nunito',
                                                fontWeight: '600'
                                            },
                                            total: {
                                                show: true,
                                                showAlways: true, //disable show tooltips in the middle when hover
                                                //formatter: () => '343',
                                                label: 'Total ideas proposed',
                                                fontSize: 13,
                                                fontFamily: 'nunito',
                                                fontWeight: 600,
                                                // color: '#f90000',
                                                formatter: function (w) {
                                                    // numberWithCommas(w)
                                                    return numberWithCommas(w.globals.seriesTotals.reduce((a, b) => {
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


export default ProposalChart