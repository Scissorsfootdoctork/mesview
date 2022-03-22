import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

const echarts = require('echarts')
export const Bar = ({defaultvalue}: any) => {
    console.log(defaultvalue)
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: defaultvalue?.a,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],

        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '40%',
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
                data: defaultvalue?.b
            }
        ]
    }
    const chartRef = useRef(null)
    let myChart: any = null

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
    }, [defaultvalue])

    return <ContainerGauge ref={chartRef}/>
}

const ContainerGauge = styled.div`
  width: 100%;
  height: 35rem;
`
