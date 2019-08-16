import React from 'react';
import styled from 'styled-components'
import { FaAngleRight, FaCaretSquareDown } from "react-icons/fa";

export const MarkersSection = ({ report }) => {
    const markers = report.markers

    const _getScoreColor = (score) => {
        switch (true) {
            case (score <= 20):
                return "red"
            case (score <= 80):
                return "orange"
            default:
                return "green"
        }
    }

    const _getLatestScore = (measurements) => {
        return measurements[0].score

    }

    return (
        <Markers>
            <MarkerSectionHeader>
                <h2>Your Levels</h2>
                <h3>Your levels based on your blood test.</h3>
            </MarkerSectionHeader>

            {
                markers.map((marker, index) => {
                    const score = _getLatestScore(marker.measurements)
                    // const score = marker.measurements[0].score
                    const color = _getScoreColor(score)
                    return (

                        <MarkersWrapper key={index}>
                            <MarkerContainer>
                                <MarkerDetails>
                                    <MarkerHeader>
                                        {marker.name}
                                    </MarkerHeader>
                                    <Score>
                                        <ProgressBarWrapper>
                                            <ProgressBar
                                                score={score}
                                                color={color} />
                                        </ProgressBarWrapper>
                                        {/* TODO get right measurements */}
                                        <ProgressBarScore>{score}/100</ProgressBarScore>
                                    </Score>
                                </MarkerDetails>
                                <MarkerArrow />
                            </MarkerContainer>
                        </MarkersWrapper>
                    )
                })
            }
        </ Markers>
    )
}

const Markers = styled.div`
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
  width: ${props => props.score}%;
  background-color: ${props => props.color};
  height: 10px;
  border-radius: 10px;

`;