'use client'

import { Stack } from "@mui/material"
import { useState, useEffect } from "react";
import OuterWindowWrapper from "../components/OuterWindowWrapper";
import InnerWindowWrapper from "../components/InnerWindowWrapper";
import TablePie from "../components/TablePie";
import DialogExplanation from "./components/DialogExplanation";
import { updateProgress } from '@/app/interfaceStore';
import SecondaryWindowHeader from "../components/SecondaryWindowHeader";
import { Typography } from "@mui/material";
import StatisticDetails from "./components/StatisticDetails";
import StatisticDetailsItem from "./components/StatisticDetailsItem";

import NorthWestRoundedIcon from '@mui/icons-material/NorthWestRounded';
import SouthEastRoundedIcon from '@mui/icons-material/SouthEastRounded';

export default function Statistics() {
    const [pieData, setPieData] = useState([]);
    const [pieOverallData, setPieOverallData] = useState([]);
    const [mostPlayedDeck, setMostPlayedDeck] = useState(undefined);
    const [lessPlayedDecks, setLessPlayedDecks] = useState(undefined);

    useEffect(() => {

        const fetchLowestResults = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}find-lowest-results`
            );
            const json = await response.json();
            console.log("🚀 ~ file: page.jsx:22 ~ fetchPieData ~ json:", json)
            setLessPlayedDecks(json)

            updateProgress(80)
        };

        const fetchPieData = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}winner-breakdown`
            );
            const json = await response.json();
            console.log("🚀 ~ file: page.jsx:22 ~ fetchPieData ~ json:", json)
            setPieData(json);
            updateProgress(80)
        };

        const fetchPieOverallData = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}overall-breakdown`
            );
            const json = await response.json();
            console.log("🚀 ~ file: page.jsx:41 ~ fetchPieOverallData ~ json:", json)


            setPieOverallData(json);

            if (json[0][0].length === 0) {
                setMostPlayedDeck({ name: json[0][1], count: json[1][1], percentage: json[2][1], indicesOfLowestResult: [] })
            }

            updateProgress(100)
            setTimeout(() => updateProgress(0), 500)
        };

        const data = async () => {
            await fetchLowestResults()
            await fetchPieData();
            await fetchPieOverallData()
        }
        data()
    }, []);

    return (
        <OuterWindowWrapper>
            <InnerWindowWrapper
                currentRoute={'/statistics'}
                pagetitle={'Statistics'}>

                <SecondaryWindowHeader
                    sectionTitle={'Overall Informations'} />

                <StatisticDetails>

                    <StatisticDetailsItem
                        itemTitle={'Most Played Deck(s)'}
                        icon={<NorthWestRoundedIcon />}
                        data={mostPlayedDeck} />

                    <StatisticDetailsItem
                        itemTitle={'Less Played Deck(s)'}
                        icon={<SouthEastRoundedIcon />}
                        data={lessPlayedDecks} />

                </StatisticDetails>

                <SecondaryWindowHeader
                    informationTitle={'These data reveal the frequency of deck victories in tournaments, indicating which decks have won the most tournaments.'}
                    sectionTitle={'Winner Breakdown'} />

                <TablePie winnerJson={pieData} item="winner-breakdown" />

                <SecondaryWindowHeader
                    informationTitle={'The data provides an overview of the total number of games played with each deck.'}
                    sectionTitle={'Overall Breakdown'} />

                <TablePie winnerJson={pieOverallData} item="winner-breakdown" />

            </InnerWindowWrapper>
        </OuterWindowWrapper >
    );
}