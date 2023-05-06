import React from "react";
import ReactApexChart from "react-apexcharts";

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
const chartData = {
    // series: [{ distributed }, { remaining }],
    options: {
        labels: ["Distributed", "Remaining"],
        chart: { type: "donut" },
        legend: {
            show: true,
            position: "bottom",
            labels: {
                colors: ["#5368F3", "#FFC403"],
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
                return '<div class="legend-section">' + '<div class="label-data">' + seriesName + '</div>' + '<div class="numbers">' + '$' + numberWithCommas(opts.w.globals.series[opts.seriesIndex]) + '</div>' + '</div>' + '</div>'

            }
        },
        colors: ["#5368F3", "#FFC403"],
        dataLabels: { enabled: false },
        tooltip: { enabled: true },
        fill: {
            colors: ["#5368F3", "#FFC403"]
        },
        states: {
            hover: { filter: { type: "lighten", value: 0.5 } },
            active: { filter: { type: "none", value: 0 } }
        },
        title: {
            text: "Funding budget",
            align: "center",
            style: {
                fontSize: '20px',
                fontFamily: 'nunito',
                colors: '#E86100'
            },
        },
        stroke: { width: 5 }, //width of stroke between
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: "80%", //thickness of the ring
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
                            label: "Total fund requested",
                            fontSize: 13,
                            fontFamily: "nunito",
                            fontWeight: 600,
                            show: true,
                            showAlways: true,
                            formatter: function (w) {
                                const totals = w.globals.seriesTotals;
                                const result = totals.reduce((a, b) => a + b, 0);
                                return "$" + numberWithCommas(result);
                            }
                        }
                    }
                }
            }
        }
    }
};

function FundChart({ distributed, remaining }) {
    return (
        <div className="font-poppins text-center">
            <ReactApexChart
                options={chartData.options}
                series={[distributed, remaining]}
                type="donut"
                height={"500px"}
                className="rounded-lg p-5 border-gray-200 border-[2px] bg-white"
            />
            {/* <div>{distributed}</div> */}
        </div>
    );
}

export default FundChart;
