import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

const echarts = require('echarts')

const option = {
    color: ['#0091f7', '#51ace0', '#2a99da', '#038ad9'],
    series: [
        {
            type: 'pie',
            radius: '50%',
            itemStyle: {
                normal: {
                    label: {
                        textStyle: {
                            color: '#51ACE0',
                            fontSize: 20,
                            fontWeight: 'bolder'
                        }
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#0092E5'
                        }
                    }
                }
            },
            data: [
                {value: 1048, name: '已拣货1000'},
                {value: 735, name: '在途5000'},
                {value: 580, name: '已收货3000'},
                {value: 484, name: '已上架18000'}
            ]
        }
    ]
}

export const Pie = () => {
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
    })

    return <ContainerGauge ref={chartRef}/>
}

const ContainerGauge = styled.div`
  width: 45rem;
  height: 45rem;
`
