import moment from 'moment'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MarkersSection } from '../components/markers-section'
import { BazeScoreSection } from '../components/baze-score-section'
import report from '../api/report.json'
import config from '../api/config.json'


export const Report = () => {
    // the markers mapped to the configs category (off-track, normal, optimal)
    const [assessmentMarkers, setAssessmentMarkers] = useState([])
    const [bazeScore, setBazeScore] = useState([])
    // mocked and not used for the challenge
    const [selectedMonth, setSelectedMonth] = useState(null)

    useEffect(() => {
        // get categories of config file
        const assessments = _mapAssessments(config)
        // sort markers into categories (off-track, normal, optimal)
        const mappedMarkers = _mapMarkers(report.markers, assessments)
        setAssessmentMarkers(mappedMarkers)
        // filtering out bazescore from health benefits
        const _bazeScore = _mapBazeScore(report.healthBenefits)
        setBazeScore(_bazeScore)
    }, [])

    const _mapAssessments = (categories) => {
        // get names of categories
        return categories.map((category) => { return category.assessment })
    }

    const _mapBazeScore = (benefits) => {
        const bazeScore = benefits.filter(benefit => benefit.name === 'Baze Score')[0]
        const latestMeasurement = _getLatestMeasurement(bazeScore.scoreHistory)
        const score = Math.round(latestMeasurement.score)
        const date = moment(latestMeasurement.date).format('Do MMM, YYYY')
        const category = _getCategory(score, config)
        const color = category.color
        const assessment = category.assessment
        const mappedBazeScore = {
            name: bazeScore.name,
            score: score,
            date: date,
            color: color,
            assessment: assessment
        }
        return mappedBazeScore
    }

    const _getLatestMeasurement = (scoreHistory) => {
        //sort measurements of the latest date by comparing the dates
        // see https://stackoverflow.com/questions/35202163/filter-object-array-to-return-the-object-with-the-latest-date-property
        const latestHistory = scoreHistory.sort(function (a, b) {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        })[0];

        return latestHistory
    }

    const _getLatestScore = (measurements) => {
        //filter through measurement array to only get ok values, skip errors
        const filteredMeasurements = measurements.filter((measurement) => {
            return measurement.status === "ok"
        })
        //sort measurements of the latest date
        // see https://stackoverflow.com/questions/35202163/filter-object-array-to-return-the-object-with-the-latest-date-property
        const latestMeasurement = filteredMeasurements.sort(function (a, b) {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        })[0];

        return Math.round(latestMeasurement.score)
    }

    const _getCategory = (score, config) => {
        //looping through the config
        for (const category of config) {
            // checking in which category the score is
            if (score >= category.from && score <= category.to) {
                return category
            }
        }
    }

    const _mapMarkers = (markers, assesments) => {
        const mappedMarkers = {}
        for (let assessment of assesments) {
            // initialize empty array for each assessment
            mappedMarkers[assessment] = []
        }

        markers.map((marker, index) => {
            const score = _getLatestScore(marker.measurements)
            const category = _getCategory(score, config)
            const color = category.color
            const assessment = category.assessment
            const mappedMarker = {
                name: marker.name,
                color: color,
                score: score,
            }

            mappedMarkers[assessment].push(mappedMarker)
        })

        return mappedMarkers
    }

    return (
        <Container>
            <HeaderSection>
                <Header>Your report</Header>
                <MonthChoice>
                    {/* These filters are mocked */}
                    <Month onClick={() => setSelectedMonth('oct')}>Oct</Month>
                    <Month onClick={() => setSelectedMonth('nov')}>Nov</Month>
                    <Month onClick={() => setSelectedMonth('dec')}>Dec</Month>
                </MonthChoice>
            </HeaderSection>
            <Content>
                <BazeScoreSection bazeScore={bazeScore} />
                <MarkersSection assessmentMarkers={assessmentMarkers} />
                <HealthBenefitsSection>
                    <h2>Health Benefits</h2>
                    <h3>Work in Progress</h3>
                </HealthBenefitsSection>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    padding: 40px 26px;
    background: #f5f5f5;
    height: 100vh;
`;

const HeaderSection = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
`;

const Header = styled.div`
    font-size: 34px;
    text-align: left;
`;

const MonthChoice = styled.div`
    font-size: 20px;
    align-self: center;
    display: grid;
    grid-gap: 0.5em;
    grid-template-columns: auto auto auto;
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
`;

const HealthBenefitsSection = styled.div`
    background: white;
    padding: 10px;
`;

const Month = styled.div`
    background: #fff;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
`;
