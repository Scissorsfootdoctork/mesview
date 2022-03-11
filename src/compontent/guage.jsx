import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

const echarts = require('echarts')
const option = {
	series: [
		{
			type: 'gauge',
			axisLine: {
				lineStyle: {
					width: 30,
					color: [
						[0.3, '#67e0e3'],
						[0.7, '#37a2da'],
						[1, '#fd666d']
					]
				}
			},
			pointer: {
				itemStyle: {
					color: 'auto'
				}
			},
			axisTick: {
				distance: -30,
				length: 8,
				lineStyle: {
					color: '#fff',
					width: 2
				}
			},
			splitLine: {
				distance: -30,
				length: 30,
				lineStyle: {
					color: '#fff',
					width: 4
				}
			},
			axisLabel: {
				color: 'auto',
				distance: 40,
				fontSize: 20
			},
			detail: {
				valueAnimation: true,
				formatter: '{value} km/h',
				color: 'auto'
			},
			data: [
				{
					value: 70
				}
			]
		}
	]
}

export const Gunge = () => {
	const chartRef = useRef()
	let myChart = null

	const renderChart = () => {
		const chart = echarts.getInstanceByDom(chartRef.current)
		if (chart) {
			myChart = chart
		} else {
			myChart = echarts.init(chartRef.current, null, { renderer: 'svg' })
		}
		myChart.setOption(option)
	}

	useEffect(() => {
		renderChart()
		return () => {
			option && myChart.setOption(option)
		}
	})

	return <ContainerGauge ref={ chartRef }/>
}

const ContainerGauge = styled.div`
	width: 60rem;
	height: 60rem;
`
