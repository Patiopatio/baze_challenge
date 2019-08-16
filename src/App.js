import React from 'react';
import styled from 'styled-components'
import './App.css';
import report from './report.json';
import { FaAngleRight } from "react-icons/fa";

export const App = () => {

  console.log(report)


  return (
    <Container>
      <HeaderSection>
        <Header>
          Your report
      </Header>
      </HeaderSection>

      <Content>

        <MarkersSection>
          <MarkerSectionHeader>
            Your Levels
          </MarkerSectionHeader>
          <MarkersWrapper>
            <MarkerContainer>
              <MarkerDetails>
                <MarkerHeader>
                  Selenium
                </MarkerHeader>
                <Score>
                  <ProgressBarWrapper>
                    <ProgressBar>
                    </ProgressBar>
                  </ProgressBarWrapper>
                  <ProgressBarScore>88/100</ProgressBarScore>
                </Score>
              </MarkerDetails>
              <MarkerArrow />
            </MarkerContainer>
          </MarkersWrapper>
          <div>
            {
              report.markers.map((marker, index) => {
                return (
                  <div key={index} >
                    <div>{marker.id}</div>
                    <div>{marker.name}</div>
                    <div>{marker.short}</div>
                    <div>
                      {marker.measurements[0].score}
                      {/* {marker.measurements.map((measurement, index) => {
                        return (
                          <div key={index}>
                            <div>score {measurement.score}</div>
                          </div>
                        )
                      })} */}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </MarkersSection>
        <BazeScoreSection>

        </BazeScoreSection>
        <HealthBenefitsSection>

        </HealthBenefitsSection>
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
const MarkersSection = styled.div`
  background: purple;
`;
const MarkerSectionHeader = styled.div`
  background: orange;
  `;
const MarkersWrapper = styled.div`
  background: yellow;
  `;
const MarkerContainer = styled.div`
  background: black;
  display: grid;
  grid-template-columns: 1fr auto ;
  `;
const MarkerDetails = styled.div`
  background: brown;
  `;
const MarkerHeader = styled.div`
  background: darkcyan ;
  `;
const Score = styled.div`
  background: lightcoral;
  display: grid;
  grid-template-columns: 1fr auto;
  `;
const MarkerArrow = styled(FaAngleRight)`
  background: aquamarine;
  height: 100%;
  color: white;
  `;
const BazeScoreSection = styled.div`
  background: lavenderblush;
  `;
const HealthBenefitsSection = styled.div`
  background: magenta;
  `;

const ProgressBarWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 10px;
  border-radius: 10px;
  align-self: center;

`;

const ProgressBarScore = styled.div`
width: 60px;
text-align:center;
color: white;

`;

const ProgressBar = styled.div`
  background-color: blue;
  width: 88%;
  height: 10px;
  border-radius: 10px;

`;

