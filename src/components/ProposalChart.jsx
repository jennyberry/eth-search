import React from 'react'
// import Chart from 'react-apexcharts';
import ReactApexChart from "react-apexcharts";

const ProposalChart = () => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    const chartData = {
        series: [50, 200, 250],
        options: {
            labels: ["Completed Ideas", "Funded Ideas", "Unfunded Ideas"],
            chart: { type: "donut" },
            legend: {
                show: true,
                position: "bottom",
                labels: {
                    colors: ["#5368F3", "#FFC403", "#D9D9D9"],
                    useSeriesColors: false
                },
                style: {
                    fontSize: "16px",
                    fontFamily: "nunito"
                },
                itemMargin: {
                    //padding
                    vertical: 10
                },
                formatter: function (seriesName, opts) {
                    return '<div class="legend-section">' + '<div class="label-data">' + seriesName + '</div>' + '<div class="numbers">' + numberWithCommas(opts.w.globals.series[opts.seriesIndex]) + '</div>' + '</div>' + '</div>'

                }
            },
            colors: ["#5368F3", "#FFC403", "#D9D9D9"],
            dataLabels: { enabled: false },
            tooltip: { enabled: true },
            fill: {
                colors: ["#5368F3", "#FFC403", "#D9D9D9"],
            },
            states: {
                hover: { filter: { type: "lighten", value: 0.5 } },
                active: { filter: { type: "none", value: 0 } }
            },
            title: {
                text: "Ideas Proposed",
                align: "center",
                style: {
                    fontSize: '20px',
                    fontFamily: 'nunito'
                },
            },
            stroke: { width: 5 }, //width of stroke between
            plotOptions: {
                pie: {
                    expandOnClick: false,
                    donut: {
                        size: "70%", //thickness of the ring
                        labels: {
                            show: true,
                            value: {
                                //style for total values
                                show: true,
                                fontSize: "25px",
                                colors: "#f90000",
                                fontFamily: "nunito",
                                fontWeight: "600"
                            },
                            name: { show: true },
                            total: {
                                label: "Total ideas submitted",
                                fontSize: 13,
                                fontFamily: "nunito",
                                fontWeight: 600,
                                show: true,
                                showAlways: true,
                                formatter: function (w) {
                                    const totals = w.globals.seriesTotals;
                                    const result = totals.reduce((a, b) => a + b, 0);
                                    return numberWithCommas(result);
                                }
                            }
                        }
                    }
                }
            }
        }
    };

    return (


        <div className="font-poppins text-center p-5">
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="donut"
                height={"500px"}

            />
        </div>
    )
}


export default ProposalChart