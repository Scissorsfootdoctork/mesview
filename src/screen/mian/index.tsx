import styled from '@emotion/styled'
import topImg from '../../assets/metalWorkingLittleBg.png'
import middleImg from '../../assets/metalWorkingRightBg.png'
import hexagonImg from '../../assets/d71711ef1f414285004c42e18cbcd8b0.png'
import { Circle } from '../../compontent/circle'
import { Pie } from '../../compontent/pie'
import { LineBar } from '../../compontent/ Line_Bar'
import { Bar } from '../../compontent/bar'
import { EfficiencyInfo, ScreenPages, TeamClothing } from '../index'
import { useMemo } from 'react'

type DefaultValue = {
    a: Array<string | undefined>
    b: Array<string | undefined>
}

export type DefaultValuesAbout = {
    a: Array<string | undefined>
    b: Array<string | undefined>
    c: Array<string | undefined>
}


export const MainMeter = (screenValue: ScreenPages) => {
    const { warehouseInfo, materialInfo, basicWorkInfo, teamClothing = [], efficiencyInfo = [] } = screenValue
    const defaultValue = useMemo((): DefaultValue => {
        return (teamClothing as TeamClothing[]).reduce((prev: DefaultValue, item: TeamClothing) => {
            const { teamName, teamNum } = item
            prev.a.push(teamName)
            prev.b.push(teamNum)
            return prev
        }, {
            a: [],
            b: []
        })
    }, [teamClothing])

    const DefaultValues = useMemo((): DefaultValuesAbout => {
        return (efficiencyInfo as EfficiencyInfo[]).reduce((prev: DefaultValuesAbout, item: EfficiencyInfo) => {
            const { groupName, groupEffict, completionRate } = item
            prev.a.push(groupName)
            prev.b.push(groupEffict)
            prev.c.push(completionRate)
            return prev
        }, {
            a: [],
            b: [],
            c: []
        })
    }, [efficiencyInfo])

    return <Container>
        <TopContainer>
            <TopContainerItem>
                <HexagonContainerTitle>
                    仓库作业监控
                </HexagonContainerTitle>
                <FirstContainer>
                    <NextContainer>
                        <HexagonContainer>
                            <Hexagon>{warehouseInfo?.forgoods}</Hexagon>
                            <HexagonTitle>待收货</HexagonTitle>
                        </HexagonContainer>
                        <HexagonContainer>
                            <Hexagon>{warehouseInfo?.sendGoods}</Hexagon>
                            <HexagonTitle>待上架</HexagonTitle>
                        </HexagonContainer>
                    </NextContainer>
                    <NextContainer>
                        <HexagonContainer>
                            <Hexagon>{warehouseInfo?.picking}</Hexagon>
                            <HexagonTitle>待拣货</HexagonTitle>
                        </HexagonContainer>
                        <HexagonContainer>
                            <Hexagon>{warehouseInfo?.stayon}</Hexagon>
                            <HexagonTitle>代发货</HexagonTitle>
                        </HexagonContainer>
                    </NextContainer>
                </FirstContainer>
            </TopContainerItem>
            <TopContainerItem>
                <TopContainerItemTitle>
                    原辅料跟踪
                </TopContainerItemTitle>
                <PieContainer>
                    <Pie {...materialInfo} />
                </PieContainer>
            </TopContainerItem>
            <TopContainerItem>
                <TopContainerItemTitle>
                    厂内设备物联状态
                </TopContainerItemTitle>
                <CircleRow>
                    <Circle rgb={'#009cf7'} title={'设备总数'} svg_number={basicWorkInfo?.devicesNum} />
                    <Circle rgb={'#00ffd9'} title={'运行数量'} svg_number={basicWorkInfo?.runNum} />
                    <Circle rgb={'#ff4b5a'} title={'故障总数'} svg_number={basicWorkInfo?.faultNum} />
                </CircleRow>
                <CircleRow>
                    <Circle rgb={'#ff9e5c'} title={'待机总数'} svg_number={basicWorkInfo?.standbyNum} />
                    <Circle rgb={'#e9faff'} title={'关机总数'} svg_number={basicWorkInfo?.turnOffNum} />
                </CircleRow>
            </TopContainerItem>
        </TopContainer>
        <MiddleContainer>
            <MiddleContainerItem>
                <LineBarTitle>各班组服装在制数</LineBarTitle>
                <LineBarContainer>
                    <Bar defaultvalue={defaultValue} />
                </LineBarContainer>
            </MiddleContainerItem>
        </MiddleContainer>
        <MiddleContainer>
            <MiddleContainerItem>
                <LineBarTitle>各班组人均效率/计划完成率</LineBarTitle>
                <LineBarContainer>
                    <LineBar DefaultValues={DefaultValues} />
                </LineBarContainer>
            </MiddleContainerItem>
        </MiddleContainer>
    </Container>
}

const Container = styled.div`
  width: 100%;
  height: 139.2rem;
`
const TopContainer = styled.div`
  width: 100%;
  height: 54rem;
  display: flex;
  justify-content: space-evenly;
`
const TopContainerItem = styled.div`
  width: 54rem;
  height: 54rem;
  background-image: url(${topImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const FirstContainer = styled.div`

`
const NextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const HexagonContainer = styled.div`
  width: 22rem;
  height: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const HexagonContainerTitle = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: self-end;
  justify-content: flex-start;
  padding: 0 0 0 10rem;
  font-size: 3rem;
  color: #00FFD9;
  box-sizing: border-box;
  margin-bottom: 1rem;
`
const Hexagon = styled.div`
  width: 22rem;
  height: 22rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${hexagonImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-size: 6.4rem;
  color: #00FFD9;
`
const HexagonTitle = styled.div`
  font-size: 3.2rem;
  color: #35CCE4;
`
const TopContainerItemTitle = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: self-end;
  justify-content: flex-start;
  padding: 0 0 0 10rem;
  font-size: 3rem;
  color: #00FFD9;
  box-sizing: border-box;
  margin-bottom: 4rem;
`
const PieContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 15rem;
  box-sizing: border-box;
`
const CircleRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`
const MiddleContainer = styled.div`
  width: 100%;
  height: 41rem;
  padding: 0 8rem;
  box-sizing: border-box;
`
const LineBarTitle = styled.div`
  font-size: 4rem;
  color: #00FFD9;
  padding-left: 15rem;
  margin-bottom: 2rem;
`
const LineBarContainer = styled.div``
const MiddleContainerItem = styled.div`
  width: 100%;
  height: 40rem;
  background-image: url(${middleImg});
  background-size: 100% 40rem;
  background-position: center;
  background-repeat: no-repeat;
`
