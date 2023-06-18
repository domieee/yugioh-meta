'use client'

import { Stack } from "@mui/material"
import { useState, useEffect } from "react";
import OuterWindowWrapper from "../components/OuterWindowWrapper";
import InnerWindowWrapper from "../components/InnerWindowWrapper";
import TablePie from "./components/TablePie";
import DialogExplanation from "./components/DialogExplanation";

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
        };
        fetchPieData();
    }, []); // Empty dependency array

    useEffect(() => {
        const fetchPieOverallData = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}overall-breakdown`
            );
            const json = await response.json();
            setPieOverallData(json);
        };
        fetchPieOverallData();
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