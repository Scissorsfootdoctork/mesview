import styled from '@emotion/styled'
import imgUrl from '../assets/jjBg.jpg'
import { LeftMeter } from './left_nav'
import { MainMeter } from './mian'
import { http } from '../utils'
import { useEffect, useState } from 'react'

const sizeChange = () => {
    const design_width = 2560
    const design_height = 1600
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight
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

export interface ScreenPages {
    trackingInfo?: TrackingInfo
}

export const ScreenPage = () => {
    const [header, setHeader] = useState(null)
    const [screenValue, setScreen] = useState<ScreenPages>({})
    const set_all_data = () => {
        http('messcreen/screen').then(res => {
            const {data: {screenName, screenInfo}} = res
            console.log(res)
            setScreen(JSON.parse(screenInfo))
            setHeader(screenName)
            console.log(screenValue)
        })
    }
    useEffect(() => {
        set_all_data()
    }, [])

    const {trackingInfo} = screenValue
    console.log(trackingInfo)
    return <Container className={'screen'}>
        <Header>{header || '杰克智能看板'}</Header>
        <PointArea>
            <LeftNav>
                <LeftMeter screenValue={trackingInfo}/>
            </LeftNav>
            <Main>
                <MainMeter/>
            </Main>
        </PointArea>
    </Container>
}

const Container = styled.div`
  width: 256rem;
  height: 160rem;
  transform-origin: 0 0;
  background-image: url(${imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
  width: calc(100vw - 60rem);
  height: calc(100vh - 15rem);
`
