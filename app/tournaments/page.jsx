'use client'

import TournamentList from "./components/TournamentList"
import OuterWindowWrapper from "../components/OuterWindowWrapper"
import InnerWindowWrapper from "../components/InnerWindowWrapper"

export default function Tournaments() {

    return (
        <OuterWindowWrapper>
            <InnerWindowWrapper pagetitle={'National Tournament'} currentRoute={'/tournaments'} disabledIcon={true}>
                <TournamentList />
            </InnerWindowWrapper>
        </OuterWindowWrapper>
    )
}