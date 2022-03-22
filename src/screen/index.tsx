import styled from '@emotion/styled'
import { LeftMeter } from './left_nav'
import { MainMeter } from './mian'
import { http } from '../utils'
import { useEffect, useState } from 'react'

const sizeChange = () => {
    const design_width = 2560
    const design_height = 1600
    console.log("🚀 ~ file: index.tsx ~ line 10 ~ sizeChange ~ design_height", design_height)
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight
    console.log("🚀 ~ file: index.tsx ~ line 13 ~ sizeChange ~ clientHeight", clientHeight)
    const screen = document.getElementsByClassName('screen')[0] as HTMLElement
    const Scale = clientWidth / clientHeight < design_width / design_height ? clientWidth / design_width : clientHeight / design_height
    if (!screen) return
    screen.style.transform = `scale(${Scale}) translate(-50%)`
}
window.onresize = () => {
    sizeChange()
}

export interface TrackingInfo {
    annualTarget?: string
    completeNumber?: string
    theoryNumber?: string
}

export interface WarehouseInfo {
    forgoods?: string
    picking?: string
    sendGoods?: string
    stayon?: string
}

export interface MaterialInfo {
    hasPicking?: string
    havegoods?: string
    inTransit?: string
    shelves?: string
}

export interface BasicWorkInfo {
    devicesNum?: string
    faultNum?: string
    runNum?: string
    standbyNum?: string
    turnOffNum?: string
}

export interface RepairOrder {
    id?: string
    orderNumber?: string
    orderQuantity?: string
    sewing?: string
    tailoringNum?: string
}

export interface TeamClothing {
    id?: string
    teamNum?: string
    teamName?: string
}

export interface EfficiencyInfo {
    id?: string
    groupName?: string
    groupEffict?: string
    completionRate?: string
}

export interface ScreenPages {
    trackingInfo?: TrackingInfo
    warehouseInfo?: WarehouseInfo
    materialInfo?: MaterialInfo
    basicWorkInfo?: BasicWorkInfo
    repairOrder?: RepairOrder[]
    teamClothing?: TeamClothing[]
    efficiencyInfo?: EfficiencyInfo[]
}

export const ScreenPage = () => {
    const [header, setHeader] = useState(null)
    const [screenValue, setScreen] = useState<ScreenPages>({})
    const set_all_data = async () => {
        await http('messcreen/screen').then(res => {
            const { data: { screenName, screenInfo } } = res
            setScreen(JSON.parse(screenInfo))
            setHeader(screenName)
        })
    }
    useEffect(() => {
        set_all_data()
    }, [])

    return <Container className={'screen'}>
        <Header>{header || '杰克智能看板'}</Header>
        <PointArea>
            <LeftNav>
                <LeftMeter {...screenValue} />
            </LeftNav>
            <Main>
                <MainMeter {...screenValue} />
            </Main>
        </PointArea>
    </Container>
}

const Container = styled.div`
  width: 256rem;
  height: 160rem;
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
`

const Header = styled.header`
  height: 18rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6.4rem;
  font-weight: bold;
  color: #37B1FF;
`

const PointArea = styled.div`
  display: flex;
`

const LeftNav = styled.nav`
  width: 64rem;
  height: 139.2rem;
`

const Main = styled.main`
  width: 100%;
  height: calc(100vh - 15rem);
`
