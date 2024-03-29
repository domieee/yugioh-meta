'use client'


import { useEffect } from "react"
import TournamentList from "./components/TournamentList"
import OuterWindowWrapper from "../components/OuterWindowWrapper"
import InnerWindowWrapper from "../components/InnerWindowWrapper"
import { updateProgress } from "../interfaceStore"

import { Box, TextField, Typography } from "@mui/material"
import SecondaryWindowHeader from "../components/SecondaryWindowHeader"
export default function Tournaments() {

    useEffect(() => {
        updateProgress(50)
    })

    return (
        <OuterWindowWrapper>
            <InnerWindowWrapper
                currentRoute={'/tournaments'}
                disabledIcon={true}>
                <SecondaryWindowHeader
                    sectionTitle={'Tournaments'}
                    informationTitle={'You have the option to search for either winning decks, winners names, or locations.'} />

                <TournamentList />
            </InnerWindowWrapper>
        </OuterWindowWrapper>
    )
}