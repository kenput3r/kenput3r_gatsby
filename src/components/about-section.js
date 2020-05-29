import React from "react"
import styled from "styled-components"

import AboutText from "./about-text"


const Section = styled.section`
  background-color: #FFFFFF;
  padding: 100px 0;
  * {
    box-sizeing: border-box;
  }
`
const AboutSection = () => (
  <Section>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="section-title text-center mb-60">
            <h2 className="mb-20">About Me</h2>
            <div className="horizontal-line">
              <div className="top"></div>
              <div className="bottom"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <AboutText />
        </div>
      </div>
    </div>
  </Section>
)