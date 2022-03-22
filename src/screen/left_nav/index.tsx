import styled from '@emotion/styled'
import { WaterPolo } from '../../compontent/water_polo'
import imgUrl from '../../assets/packLeftBg.png'
import { ScreenPages } from '../index'

export const LeftMeter = (screenValue: ScreenPages) => {
  const { trackingInfo, repairOrder } = screenValue
  return <LeftMeterContainer>
    <WaterContainer>
      <WaterHeader>今日订单追踪</WaterHeader>
      <PutNullArea>
        <WaterPolo />
        <WaterPoloTitle>
          <WaterPoloTitleItem>
            <WaterPoloTitleItemName>计划数量</WaterPoloTitleItemName>
            <WaterPoloTitleItemDetail>{trackingInfo?.annualTarget || 0}</WaterPoloTitleItemDetail>
          </WaterPoloTitleItem>
          <WaterPoloTitleItem>
            <WaterPoloTitleItemName>完成数量</WaterPoloTitleItemName>
            <WaterPoloTitleItemDetail>{trackingInfo?.completeNumber || 0}</WaterPoloTitleItemDetail>
          </WaterPoloTitleItem>
          <WaterPoloTitleItem>
            <WaterPoloTitleItemName>理论数量</WaterPoloTitleItemName>
            <WaterPoloTitleItemDetail>{trackingInfo?.theoryNumber || 0}</WaterPoloTitleItemDetail>
          </WaterPoloTitleItem>
        </WaterPoloTitle>
      </PutNullArea>
    </WaterContainer>
    <TableContainer>
      <TableHeader>今日生产单追踪</TableHeader>
      <PutNullArea>
        <Table>
          <Thead>
            <TheadTr>
              <TheadTrTh>序号</TheadTrTh>
              <TheadTrTh>订单号</TheadTrTh>
              <TheadTrTh>订单量</TheadTrTh>
              <TheadTrTh>裁剪数量</TheadTrTh>
              <TheadTrTh>车缝</TheadTrTh>
            </TheadTr>
          </Thead>
          <tbody>
            {
              repairOrder?.map((item, index) => {
                return (
                  <tr key={index}>
                    <Td color={'#047DBE'} fontSize={2}>{index + 1}</Td>
                    <Td>{item.orderNumber}</Td>
                    <Td>{item.orderQuantity}</Td>
                    <Td>{item.sewing}</Td>
                    <Td>{item.tailoringNum}</Td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </PutNullArea>
    </TableContainer>
  </LeftMeterContainer>
}

const LeftMeterContainer = styled.div`
  width: 64rem;
  height: 139.2rem;
  background-image: url(${imgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
`

const WaterContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const WaterHeader = styled.header`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: self-end;
  justify-content: flex-start;
  padding: 0 0 0 20rem;
  font-size: 4rem;
  font-weight: 400;
  color: #00FFD9;
`

const WaterPoloTitle = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: space-evenly;
  color: #fff;
  border-top: 0.5rem solid #ffffff;
  padding: 1rem 0;
  box-sizing: border-box;
`
const WaterPoloTitleItem = styled.div`
`
const WaterPoloTitleItemName = styled.div`
  font-size: 2.7rem;
  color: #35CCE4;
  margin-bottom: 1.5rem;
`
const WaterPoloTitleItemDetail = styled.div`
  font-size: 4.8rem;
  color: #00FFD9;
`
const TableContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const TableHeader = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: self-end;
  justify-content: flex-start;
  padding: 0 0 0 20rem;
  font-size: 4rem;
  font-weight: 400;
  color: #00FFD9;
`
const PutNullArea = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`
const Table = styled.table`
  width: 100%;
  max-height: 40rem;
  overflow: hidden;
  border-collapse: collapse;
  color: #35CCE4;
`
const Thead = styled.thead``

const TheadTr = styled.tr`
  font-size: 2.2rem;
  text-align: center;
`
const TheadTrTh = styled.th`
  padding: 1.5rem 0;
  border: 1px solid #047DBE;
`
const Td = styled.td<{ color?: string, fontSize?: number }>`
  font-size: ${props => props.fontSize ? props.fontSize + 'rem' : 1.8 + 'rem'};
  padding: 1rem 0;
  text-align: center;
  border: 1px solid #047DBE;
  color: ${props => props.color ? props.color : ''};
`






