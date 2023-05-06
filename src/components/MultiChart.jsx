import React from 'react'
import ReactApexChart from "react-apexcharts";

const MultiChart = () => {
    const chartData = {

        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
            },
            colors: ["#5368F3", "#FFC403", "#DF5F3D"], stroke: {
                width: [2, 2, 2]
            },
            markers: {
                size: 5,
            },
            plotOptions: {
                bar: {
                    columnWidth: "45%"
                }
            },
            xaxis: {
                categories: ["Fund 2", "Fund 3", "Fund 4", "Fund 5", "Fund 6", "Fund 7", "Fund 8", "Fund 9"]
            },
            yaxis: [
                {
                    seriesName: 'Ideas Submitted',
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                    },
                    title: {
                        text: "Total Ideas"
                    }
                },
                {
                    seriesName: 'Column A',
                    show: false
                }, {
                    opposite: true,
                    seriesName: 'Line C',
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                    },
                    title: {
                        text: "Total Challenges"
                    }
                }
            ],
            tooltip: {
                shared: false,
                intersect: true,
                style: {
                    fontSize: '14px',
                    fontFamily: 'nunito'
                },

                x: {
                    show: false
                }
            },
            legend: {
                horizontalAlign: "left",
                offsetX: 30,
                fontSize: "15px",
                fontFamily: "nunito",
                itemMargin: {
                    //padding
                    vertical: 10
                },
            }
        },
        series: [

            {
                name: 'Ideas funded',
                type: 'column',
                data: [12, 20, 51, 69, 151, 269, 367, 216]
            },
            {
                name: "Ideas Submitted",
                type: 'column',
                data: [78, 190, 339, 323, 824, 1195, 1654, 1513]
            },

            {
                name: "Challenge No",
                type: 'line',
                data: [1, 3, 7, 9, 19, 25, 23, 13]
            },
        ],
        dataLabels: {
            enabled: false
        },


    }
    return (
        <div className="font-poppins text-center flex justify-evenly items-center">
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="line"
                height={500}
                className="w-screen border-[2px] rounded-lg border-gray-200 bg-white py-5 lg:w-[930px]"
            />
        </div>
    )
}

export default MultiChart