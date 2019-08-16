import React from 'react';
import styled from 'styled-components'
import './App.css';
import report from './report.json';
import { MarkersSection } from './components/markers-section'

export const App = () => {

  console.log(report)

  return (
    <Container>
      <HeaderSection>
        <Header>Your report</Header>
      </HeaderSection>
      <Content>
        <MarkersSection report={report} />
        <BazeScoreSection />
        <HealthBenefitsSection />
      </Content>
    </Container>
  )

}

const Container = styled.div`
  padding: 40px 25px;
  background: #f5f5f5;
  
  
`;
const HeaderSection = styled.div`
  background: pink;
  `;

const Header = styled.div`
  background: blue;
  font-size: 34px;
  
  `;
const Content = styled.div`
  background: green;
  display: grid;
  grid-template-columns:repeat(3, 1fr);
`;

const BazeScoreSection = styled.div`
  background: lavenderblush;
  `;
const HealthBenefitsSection = styled.div`
  background: magenta;
  `;



