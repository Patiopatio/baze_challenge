import React from 'react'
import styled from 'styled-components'

import SemiCircleProgressBar from "react-progressbar-semicircle";

export const BazeScoreSection = ({ bazeScore }) => {
    const name = bazeScore.name
    const textColor = bazeScore.textColor
    const backgroundColor = bazeScore.backgroundColor
    const score = bazeScore.score ? bazeScore.score : 0
    const date = bazeScore.date
    const color = bazeScore.color
    const assessment = bazeScore.assessment

    return (
        <Container>
            <SectionHeader >
                <Header
                    color={textColor}
                    backgroundColor={backgroundColor}
                >Your {name}</Header>
                <SubHeader>{date}</SubHeader>
            </SectionHeader>
            <ScoreDisplay>
                <SemiCircleProgressBar
                    percentage={score}
                    stroke={color}
                />
                {score} / 100
                <h3>
                    {assessment}
                </h3>

            </ScoreDisplay>
        </Container>
    )
}

const Container = styled.div`
    background: white;
    padding: 10px;
`;

const SectionHeader = styled.div`
`;

const Header = styled.h2`
    color: ${props => props.color};
    /* Currently not fitting into the rest of the design */
    /* background: ${props => props.backgroundColor}; */
`;

const SubHeader = styled.h3`
    color: ${props => props.color};
    /* Currently not fitting into the rest of the design */
    /* background: ${props => props.backgroundColor}; */
`;

const ScoreDisplay = styled.div`
`;
