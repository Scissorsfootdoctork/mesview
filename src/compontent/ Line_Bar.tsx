import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

const echarts = require('echarts')

export const LineBar = ({DefaultValues}: { DefaultValues: any }) => {
    const chartRef = useRef(null)
    let myChart: any = null
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: false},
                magicType: {show: false},
                restore: {show: false},
                saveAsImage: {show: false}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: DefaultValues?.a,
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '',
                min: 0,
                max: 1,
                interval: 50,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '',
                min: 0,
                max: 1,
                interval: 5
            }
        ],
        series: [
            {
                name: 'Precipitation',
                type: 'bar',
                itemStyle: {
                    normal: {
                        label: {
                            position: 'top',
                            show: true,
                            textStyle: {
                                color: '#71C8B1',
                                fontSize: '22'
                            }
                        },
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#06B5D7'},                   //柱图渐变色
                                {offset: 0.5, color: '#44C0C1'},                 //柱图渐变色
                                {offset: 1, color: '#71C8B1'}                   //柱图渐变色
                            ]
                        )
                    }
                },
                data: DefaultValues?.b
            },
            {
                name: 'Temperature',
                type: 'line',
                yAxisIndex: 1,
                data: DefaultValues?.c
            }
        ]
    }
    const renderChart = () => {
        const chart = echarts.getInstanceByDom(chartRef.current)
        if (chart) {
            myChart = chart
        } else {
            myChart = echarts.init(chartRef.current, null, {renderer: 'svg'})
        }
        myChart.setOption(option)
    }

    useEffect(() => {
        renderChart()
        return () => {
            option && myChart.setOption(option)
        }
    })

    return <ContainerGauge ref={chartRef}/>
}

const ContainerGauge = styled.div`
  width: 100%;
  height: 35rem;
`
