import React from 'react'
import styled from 'styled-components'


export const ScoreBar = ({ score, color }) => {
    return (
        <ScoreBarWrapper>
            <ProgressBarWrapper>
                <ProgressBar score={score} color={color} />
            </ProgressBarWrapper>
            <ProgressBarScore> {score}/100</ProgressBarScore>
        </ScoreBarWrapper>
    )
}

const ScoreBarWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
`;

const ProgressBarWrapper = styled.div`
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    align-self: center;
`;

const ProgressBar = styled.div`
    width:${props => props.score}%;
    background-color: ${props => props.color};
    height:100%;
    border-radius: 10px;
`;

const ProgressBarScore = styled.div`
    width: 60px;
    font-size: .8rem;
    text-align: center;
    color: black;
`;