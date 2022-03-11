import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const WaterPolo = () => {
    return (
        <WaterWaves>
            <WaterWaves1/>
            <WaterWaves2/>
            <WaterWaves3/>
        </WaterWaves>
    )
}
const bounce = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const WaterWaves = styled.div`
  width: 32.9rem;
  height: 32.9rem;
  border: 0.3rem solid #ccc;
  border-radius: 50%;
  margin: auto;
  position: relative;
  overflow: hidden;
  animation: ${bounce} linear infinite;
`
const WaterWaves1 = styled.div`
  background-color: rgba(101, 196, 242);
  position: absolute;
  width: 200%;
  height: 200%;
  top: 40%;
  left: -25%;
  opacity: 0.7;
  border-radius: 40%;
  animation: inherit;
  animation-duration: 4s;
`
const WaterWaves2 = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  background-color: rgba(0, 103, 151);
  top: 45%;
  left: -35%;
  border-radius: 30%;
  opacity: 0.5;
  animation: inherit;
  animation-duration: 8s;
`
const WaterWaves3 = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  top: 50%;
  left: -35%;
  opacity: 0.3;
  background-color: rgba(85, 210, 232);
  border-radius: 20%;
  animation: inherit;
  animation-duration: 12s;
`

