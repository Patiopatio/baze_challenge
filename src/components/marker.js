import React from 'react'
import styled from 'styled-components'
import { FaAngleRight } from "react-icons/fa";
import { ScoreBar } from './score-bar'


export const Marker = ({ marker }) => {
    const name = marker.name
    const score = marker.score
    const color = marker.color
    return (
        <MarkersWrapper >
            <MarkerContainer>
                <MarkerDetails>
                    <MarkerHeader>
                        {name}
                    </MarkerHeader>
                    <Score score={score} color={color} />
                </MarkerDetails>
                <MarkerArrow />
            </MarkerContainer>
        </MarkersWrapper>
    )
}

const MarkersWrapper = styled.div`
            cursor: pointer;
            margin-bottom: 20px;
        `;

const MarkerContainer = styled.div`
            display: grid;
            grid-template-columns: 1fr auto;
        `;

const MarkerDetails = styled.div`
        `;

const MarkerHeader = styled.div`
    text-align: left;
`;

const Score = styled(ScoreBar)`
            display: grid;
            grid-template-columns: 1fr auto;
        `;

const MarkerArrow = styled(FaAngleRight)`
            height: 100%;
            color: lightgray;
        `;
