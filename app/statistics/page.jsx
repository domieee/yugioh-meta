'use client'

import { Stack } from "@mui/material"
import { useState, useEffect } from "react";
import OuterWindowWrapper from "../components/OuterWindowWrapper";
import InnerWindowWrapper from "../components/InnerWindowWrapper";
import TablePie from "../components/TablePie";
import DialogExplanation from "./components/DialogExplanation";
import { updateProgress } from '@/app/interfaceStore';

export default function Statistics() {
    const [pieData, setPieData] = useState([]);
    const [pieOverallData, setPieOverallData] = useState([]);

    useEffect(() => {
        const fetchPieData = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}winner-breakdown`
            );
            const json = await response.json();
            setPieData(json);
            updateProgress(75)
        };
        const fetchPieOverallData = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}overall-breakdown`
            );
            const json = await response.json();
            setPieOverallData(json);
            updateProgress(100)
            setTimeout(() => updateProgress(0), 500)
        };
        const data = async () => {
            await fetchPieData();
            await fetchPieOverallData()
        }
        data()
    }, []); // Empty dependency array

    return (
        <OuterWindowWrapper>
            <InnerWindowWrapper
                menuOptions={
                    <DialogExplanation
                        item={'winner-breakdown'}
                    />}
                currentRoute={'/statistics'}
                pagetitle={'Winner Breakdown'}>
                <TablePie winnerJson={pieData} item="winner-breakdown" />
            </InnerWindowWrapper>

            <InnerWindowWrapper
                menuOptions={
                    <DialogExplanation
                        item={'overall-breakdown'}
                    />}
                currentRoute={'/statistics'}
                item={'overall-breakdown'}
                pagetitle={'Overall Breakdown'}>
                <TablePie
                    topCutJson={pieOverallData}
                    item="overall-breakdown" />
            </InnerWindowWrapper>
        </OuterWindowWrapper>
    );
}