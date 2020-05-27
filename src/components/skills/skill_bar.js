import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const SkillBarContainer = styled.div`
  margin-bottom: 28px;
`
const H4 = styled.h4`
  color: #5e5e5e;
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 15px;
  position: relative;
  text-transform: uppercase;
`
const Title = styled.span`
  box-sizing: border-box;
  z-index: 100;
`
const ProgressWrapper = styled.span`
  box-sizing: border-box;
  width: 100%;
  z-index: 10;
`
const ProgressMark = styled.span`
  bottom: 0;
  position: absolute;
  &:after {
    background: #484848 none repeat scroll 0 0;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(72, 72, 72, 0.5);
    content: "";
    height: 14px;
    position: absolute;
    right: 0;
    bottom: -25px;
    width: 14px;
    z-index: 999;
  }
`
const Percent = styled.span`
  position: absolute;
  right: -10px;
  bottom: -15px;
  margin: 0 0 15px;
`
const ProgressOuter = styled.div`
  box-sizing: border-box;
  height: 7px;
  border-radius: 3px;
  background-color: #c8c8c8;
`
const ProgressContent = styled.div`
  box-sizing: border-box;
  border-radius: 3px;
  height: 7px;
  background-color: #484848;
`

const SkillBar = ({ skill }) => (
  <SkillBarContainer>
    <H4>
      <Title>{skill.title}</Title>
      <ProgressWrapper>
        <ProgressMark style={{left: `${skill.strength}%`}}>
          <Percent>{skill.strength}%</Percent>
        </ProgressMark>
      </ProgressWrapper>
    </H4>
    <ProgressOuter>
      <ProgressContent style={{width: `${skill.strength}%`}} />
    </ProgressOuter>
  </SkillBarContainer>
)

SkillBar.propTypes = {
  skill: PropTypes.object
}

SkillBar.defaultProps = {
  skill: {title: `ERP`, strength: 90}
}

export default SkillBar