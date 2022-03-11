import styled from '@emotion/styled'


export const Circle = ({rgb, title, svg_number}: { rgb?: string, title?: string, svg_number?: string }) => {
    return (
        <SvgContainer>
            <Svg>
                <Circles cx={55} cy={55} r={55}/>
                <CirclesSecond rgb={rgb} cx={55} cy={55} r={55}/>
            </Svg>
            <SvgNumber svg_number={svg_number}>{svg_number}</SvgNumber>
            <SvgTitle>{title || 'SvgTitle'}</SvgTitle>
        </SvgContainer>
    )
}

const SvgContainer = styled.div`
  position: relative;
  width: 17rem;
  height: 18em;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SvgTitle = styled.h2`
  margin-top: 2rem;
  font-size: 2.7rem;
  font-weight: 400;
  color: #28A1B8;
`
const SvgNumber = styled.div<{ svg_number?: string }>`
  position: absolute;
  top: 4.3rem;
  left: ${props => props.svg_number?.length === 1 ? 7.5 + 'rem' : props.svg_number?.length === 2 ? 6.3 + 'rem' : 5.5 + 'rem'};
  color: #28a1b8;
  font-weight: bold;
  font-size: 3rem;
  z-index: 99;
`
const Svg = styled.svg`
  width: 13rem;
  height: 13rem;
  fill: none;
  stroke-width: 5;
  stroke: rgba(255, 255, 255, 0.05);
`
const Circles = styled.circle`
  width: 13rem;
  height: 13rem;
  fill: none;
  stroke-width: 7;
  stroke: rgba(255, 255, 255, 0.05);
  transform: translate(5px, 5px);
  stroke-linecap: round;
`
const CirclesSecond = styled.circle<{
    rgb?: string
}>`
  width: 13rem;
  height: 13rem;
  fill: none;
  stroke-width: 7;
  transform: translate(5px, 5px);
  stroke-linecap: round;
  stroke: ${(props => props.rgb ? props.rgb : '#fff')};;
  stroke-dasharray: 25rem;
  stroke-dashoffset: 100px;
`
