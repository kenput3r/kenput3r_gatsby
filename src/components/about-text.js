import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-right: 40px;
  box-sizeing: border-box;
  * {
    box-sizing: border-box;
  }
`
const Title = styled.h3`
  font-weight: 600;
  margin: 0 0 15px;
`
const Text = styled.p`
  line-height: 28px;
  font-size: 16px;
`
const ButtonContainer = styled.div`
  margin-top: 30px;
`
const DownloadButton = styled.a`
  background-color: #393939;
  border: 0 none;
  border-radius: 5px;
  color: #FFFFFF;
  font-size: 14px;
  height: 47px;
  line-height: 50px;
  padding: 0 30px;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
`
const AboutText = () => (
  <Container>
    <Title>In short? I'm a geek.</Title>
    <Text>
    I am the CTO at Suavecito, Inc., and I lead a team of developers, photographers, videographers and media specialists. My responsibilities include the design, construction and implementation of business solutions, and the creation, publication, and promotion of ad content across the internet.
    </Text>
    <ButtonContainer>
      <DownloadButton href="https://kenput3r.com">DOWNLOAD MY INFO</DownloadButton>
    </ButtonContainer>
  </Container>
)
export default AboutText