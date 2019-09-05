import React from 'react'
import styled from 'styled-components'
import { Marker } from './marker'

export const MarkersSection = ({ assessmentMarkers }) => {

    return (
        <Markers>
            <MarkersSectionHeader>
                <h2>Your Levels</h2>
                <h3>Your levels based on your blood test.</h3>
            </MarkersSectionHeader>
            {/* loop through assessments */}
            {Object.keys(assessmentMarkers).map((assessment, index) => {
                return (
                    <div key={index}>
                        <h2>{assessment}</h2>
                        {/* loop through markers of assessment */}
                        {assessmentMarkers[assessment].map((marker, index) => {
                            return <Marker marker={marker} key={index} />
                        })}
                    </div>
                )
            })}

        </Markers>
    )
}

const Markers = styled.div`
    background: white;
    padding: 10px;

`;

const MarkersSectionHeader = styled.div`
`;
