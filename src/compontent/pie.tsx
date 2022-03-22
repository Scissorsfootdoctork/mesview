import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { MaterialInfo } from '../screen'

const echarts = require('echarts')

export const Pie = ({hasPicking, havegoods, inTransit, shelves}: MaterialInfo) => {
    const chartRef = useRef(null)
    let myChart: any = null

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
                    {value: hasPicking, name: `已拣货${hasPicking}`},
                    {value: inTransit, name: `在途${inTransit}`},
                    {value: havegoods, name: `已收货${havegoods}`},
                    {value: shelves, name: `已上架${shelves}`}
                ]
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
  width: 45rem;
  height: 45rem;
`
