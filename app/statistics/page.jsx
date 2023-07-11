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

import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

export default function Statistics() {
    const [pieData, setPieData] = useState([]);
    const [pieOverallData, setPieOverallData] = useState([]);
    const [mostPlayedDeck, setMostPlayedDeck] = useState(undefined);

    useEffect(() => {
        const fetchMostPlayedDeck = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}most-played-deck`
            );
            const json = await response.json();
            console.log("🚀 ~ file: page.jsx:31 ~ fetchPieOverallData ~ json:", json)
            setMostPlayedDeck(json);
            updateProgress(66)
            setTimeout(() => updateProgress(0), 500)
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
            console.log("🚀 ~ file: page.jsx:31 ~ fetchPieOverallData ~ json:", json)
            setPieOverallData(json);
            updateProgress(100)
            setTimeout(() => updateProgress(0), 500)
        };

        const data = async () => {
            await fetchMostPlayedDeck();
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
                        itemTitle={'Most Played Deck'}
                        icon={<TrendingUpRoundedIcon />}
                        data={mostPlayedDeck} />
                    <StatisticDetailsItem
                        itemTitle={'Less Played Deck'}
                        icon={<TrendingDownRoundedIcon />}
                        data={mostPlayedDeck} />
                    <StatisticDetailsItem
                        itemTitle={'Most Played Deck'}
                        icon={<TrendingDownRoundedIcon />}
                        data={mostPlayedDeck} />
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