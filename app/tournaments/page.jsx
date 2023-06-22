'use client'


import { useEffect } from "react"
import TournamentList from "./components/TournamentList"
import OuterWindowWrapper from "../components/OuterWindowWrapper"
import InnerWindowWrapper from "../components/InnerWindowWrapper"
import { updateProgress } from "../interfaceStore"
export default function Tournaments() {

    useEffect(() => {
        updateProgress(50)
    })

    return (
        <OuterWindowWrapper>
            <InnerWindowWrapper pagetitle={'National Tournaments'} currentRoute={'/tournaments'} disabledIcon={true}>
                <TournamentList />
            </InnerWindowWrapper>
        </OuterWindowWrapper>
    )
}