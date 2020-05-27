import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import SkillBar from "./skill_bar"

const Container = styled.div`
  box-sizing: border-box;
  width: 370px;
`

const SkillProgress = ({ skills }) => {
  const skills_list = skills.map((skill, index) =>
   <SkillBar key={`skill-`+index} skill={skill} />
  )
  return (
    <Container>
      {skills_list}
    </Container>
  )
}

SkillProgress.propTypes = {
  skills: PropTypes.array
}

SkillProgress.defaultProps = {
  skills: [
    {title: `ERP`, strength: 90}, 
    {title: `WEB DEVELOPMENT`, strength: 95}, 
    {title: `SEO & ACCESSIBILITY`, strength: 85},
    {title: `PPC & SOCIAL`, strength: 80}
  ]
}

export default SkillProgress